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

const projectRouter = require("./api/projects")

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



app.listen(3001, ()=>{
    console.log("Server is running on port 3001")
})