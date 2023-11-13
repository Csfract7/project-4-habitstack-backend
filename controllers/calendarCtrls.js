// This is where database is changed to achieve Crud
const db = require('../models') 


//Calendar INDEX ROUTE '/Calendar'
const getCalendar = async (req, res) => {
    try{
        const foundCalendar = await db.Calendar.find({})
        if(!foundCalendar){
            res.status(404).json({message: "Cannot find Calendar"})
        } else {
            res.status(200).json({data: foundCalendar})
        }
    } catch(err) {
        res.status(400).json({error: err.message})
    }
    //res.send('getCalendar')
}


//Calendar CREATE ROUTE
const createCalendar = async (req, res) => {
    try{
        const createdCalendar = await db.Calendar.create(req.body)
        createdCalendar.save()
        if(!createdCalendar){
            res.status(400).json({message: "Cannot create Calendar"})
        }
        else {
            res.status(201).json({message: "Calendar created", data: createdCalendar})
        }
    } catch(err) {
        res.status(400).json({error: err.message})
    }
    //res.send('createCalendar')
}


//Calendar UPDATE ROUTE
const updateCalendar = async (req, res) => {
    try{
        const updatedCalendar = await db.Calendar.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updatedCalendar){
            res.status(400).json({message: 'Could not update Calendar'})
        } else {
            res.status(200).json({Data: updatedCalendar, message: "Calendar updated"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


//Calendar DESTROY ROUTE
const deleteCalendar = async (req, res) => {
    try {
        const deletedCalendar = await db.Calendar.findByIdAndDelete(req.params.id)
        if(!deletedCalendar){
            res.status(400).json({message: 'Could not delete Calendar'})
        } else {
            res.status(200).json({Data: deletedCalendar, message: "Calendar deleted"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


module.exports = {
    getCalendar,
    createCalendar,
    updateCalendar, 
    deleteCalendar
}