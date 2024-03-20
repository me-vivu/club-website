const express = require('express');
const router = express.Router();
const Project = require('../../models/project'); // Assuming your Mongoose model is named Project

// GET method to fetch a specific project by projectId
router.get('/project-view/:projectId', async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const project = await Project.findOne({ projectID: projectId });
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
