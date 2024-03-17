const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const SignupModel = require('./models/signup')
const Token = require('./models/token')
const Carousel = require("./models/carausel")
const Events = require("./models/events")
const Members = require("./models/members")
const Project = require("./models/project")
const crypto = require("crypto")

const { google } = require('googleapis');
const Multer = require('multer');
const fs = require('fs');



const projectRouter = require("./api/projects")
const membersRouter = require("./api/members")

const verify = require('./utils')
require("dotenv").config();


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)

app.post('/register',  (req, res)=>{

    const {firstName, emailId, password} = req.body;
    SignupModel.findOne({emailId: emailId})
    .then(async user =>{
        if(!user){
            SignupModel.create(req.body)
            .then(signups => res.json(signups))
            .catch(err=> res.json(err))

            const token = new Token({
                userId: emailId,
                token: parseInt(Math.random()*8999 + 1000, 10)
            })

            process.env.AUTH_OTP = token.token;

            await token.save();

            verify(firstName, emailId, token.token);

            console.log(token);

        }else{
            res.json("User Already exist!")
        }
    })

})

app.post('/verify', (req, res) =>{
    const{otp} = req.body;
    console.log(process.env.AUTH_OTP)
    
    if(otp == process.env.AUTH_OTP){
        res.json("success");
    }else{
        res.json("tryAgain");
    }
    
})



app.post("/login" , (req, res) =>{

    const {emailId, password} = req.body;
    
    SignupModel.findOne({emailId: emailId})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("Password is Incorrect")
            }
        }else{
            res.json("User Not Found")
        }
    })

})

app.post('/carousels', async (req, res) => {
    try {
      const { header, firstLine, secondLine, link } = req.body;
  
      // Validate request body
      if (!header || !firstLine || !link) {
        return res.status(400).json({ message: 'Please provide header, firstLine, and link' });
      }
  
      // Create new carousel item
      const newCarousel = new Carousel({
        header,
        firstLine,
        secondLine,
        link
      });
  
      // Save the carousel item to the database
      await newCarousel.save();
  
      // Send success response
      res.status(201).json({ message: 'Carousel item created successfully', data: newCarousel });
    } catch (err) {
      console.error('Error creating carousel item:', err);
      res.status(500).json({ message: 'Server error' });
    }
});


app.get('/getCarousels', async (req, res) => {
    try {
        // Fetch all carousel items from the database
        const carousels = await Carousel.find();
        

        // Send success response with the retrieved carousel items
        res.status(200).json({ message: 'Carousel items retrieved successfully', data: carousels });
    } catch (err) {
        console.error('Error retrieving carousel items:', err);
        res.status(500).json({ message: 'Server error' });
    }
});


app.use(projectRouter);
app.use(membersRouter);


const multer = Multer({
    storage: Multer.diskStorage({
      destination: function (req, file, callback) {
        
        let destinationFolder;
        
        if (req.folder) {
            console.log(req.folder)
            destinationFolder = req.folder; // Get destination folder from request body
        } else {
            destinationFolder = ''; // Default folder if not specified in request
        }
        callback(null, `${__dirname}/${destinationFolder}`);
      },
      filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
      },
    }),
    limits: {
      fileSize: 5 * 1024 * 1024, // 5 MB
    },
});
  
const authenticateGoogle = () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: './service-account.json',
        scopes: "https://www.googleapis.com/auth/drive",
    });
    return auth;
};

  
const uploadToGoogleDrive = async (file, auth) => {
    const fileMetadata = {
        name: file.originalname,
        parents: ["1MznEPr9l_-8XpWd3Mo4b-G-OdemF-pwu"], 
};
  
const media = {
    mimeType: file.mimetype,
    body: fs.createReadStream(file.path),
};

const driveService = google.drive({ version: "v3", auth });
  
const response = await driveService.files.create({
        requestBody: fileMetadata,
        media: media,
        fields: "id",
    });
    return response.data.id;
};
  
const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) {
        console.error("Error deleting file:", err);
        } else {
        console.log("File deleted");
        }
    });
};
  
app.post("/uploadData", multer.single("file"), async (req, res, next) => {
    try {

        
        if (!req.file) {
            res.status(400).send("No file uploaded.");
            return;
        }

        const auth = authenticateGoogle();
        const fileId = await uploadToGoogleDrive(req.file, auth);
        deleteFile(req.file.path);
        res.status(200).json({ fileId });

    } catch (err) {
        console.error("Error uploading file:", err);
        res.status(500).send("Internal server error");
    }
});



app.listen(3001, ()=>{
    console.log("Server is running on port 3001")
})