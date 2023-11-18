// This is where database is changed to achieve Crud
const db = require('../models') 


//Progress INDEX ROUTE '/Progress'
const getProgress = async (req, res) => {
    try {
        const foundProgress = await db.Progress.find({})
            .populate('name completed image'); // Populate the referenced fields from the Stack model

        if (!foundProgress) {
            res.status(404).json({ message: "Cannot find Progress" });
        } else {
            res.status(200).json({ data: foundProgress });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    //res.send('getProgress')
}



//Progress CREATE ROUTE
const createProgress = async (req, res) => {
    try {
        // Extract stack IDs from the request body
        const { name, completed, image } = req.body;

        // Create Progress document with valid Stack references
        const createdProgress = await db.Progress.create({
            name: name,  // Make sure name is a valid Stack ID
            completed: completed,  // Make sure completed is a valid Stack ID
            image: image  // Make sure image is a valid Stack ID
        });

        if (!createdProgress) {
            res.status(400).json({ message: "Cannot create Progress" });
        } else {
            res.status(201).json({ message: "Progress created", data: createdProgress });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}



//Progress UPDATE ROUTE
const updateProgress = async (req, res) => {
    try{
        const updatedProgress = await db.Progress.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updatedProgress){
            res.status(400).json({message: 'Could not update Progress'})
        } else {
            res.status(200).json({Data: updatedProgress, message: "Progress updated"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


//Progress DESTROY ROUTE
const deleteProgress = async (req, res) => {
    try {
        const deletedProgress = await db.Progress.findByIdAndDelete(req.params.id)
        if(!deletedProgress){
            res.status(400).json({message: 'Could not delete Progress'})
        } else {
            res.status(200).json({Data: deletedProgress, message: "Progress deleted"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


module.exports = {
    getProgress,
    createProgress,
    updateProgress, 
    deleteProgress
}