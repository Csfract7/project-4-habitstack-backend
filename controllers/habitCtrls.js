// This is where database is changed to achieve Crud
const db = require('../models') 


//Habit INDEX ROUTE '/Habit'
const getHabit = async (req, res) => {
    try{
        const foundHabit = await db.Habit.find({})
        if(!foundHabit){
            res.status(404).json({message: "Cannot find Habit"})
        } else {
            res.status(200).json({data: foundHabit})
        }
    } catch(err) {
        res.status(400).json({error: err.message})
    }
    //res.send('getHabit')
}


//Habit CREATE ROUTE
const createHabit = async (req, res) => {
    try{
        const createdHabit = await db.Habit.create(req.body)
        createdHabit.save()
        if(!createdHabit){
            res.status(400).json({message: "Cannot create Habit"})
        }
        else {
            res.status(201).json({message: "Habit created", data: createdHabit})
        }
    } catch(err) {
        res.status(400).json({error: err.message})
    }
    //res.send('createHabit')
}


//Habit UPDATE ROUTE
const updateHabit = async (req, res) => {
    try{
        const updatedHabit = await db.Habit.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updatedHabit){
            res.status(400).json({message: 'Could not update Habit'})
        } else {
            res.status(200).json({Data: updatedHabit, message: "Habit updated"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


//Habit DESTROY ROUTE
const deleteHabit = async (req, res) => {
    try {
        const deletedHabit = await db.Habit.findByIdAndDelete(req.params.id)
        if(!deletedHabit){
            res.status(400).json({message: 'Could not delete Habit'})
        } else {
            res.status(200).json({Data: deletedHabit, message: "Habit deleted"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


module.exports = {
    getHabit,
    createHabit,
    updateHabit, 
    deleteHabit
}