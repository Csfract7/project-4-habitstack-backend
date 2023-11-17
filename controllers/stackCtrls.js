// This is where database is changed to achieve Crud
const db = require('../models') 


//Stack INDEX ROUTE '/Stack'
const getStack = async (req, res) => {
    try{
        const foundStack = await db.Stack.find({}).populate('habits');

        if(!foundStack){
            res.status(404).json({message: "Cannot find Stack"})
        } else {
            res.status(200).json({data: foundStack})
        }
    } catch(err) {
        res.status(400).json({error: err.message})
    }
    //res.send('getStack')
}


//Stack CREATE ROUTE

const createStack = async (req, res) => {
    try {
        const { habits, ...stackData } = req.body;

        console.log("Received request to create stack with data:", req.body);

        if (!Array.isArray(habits)) {
            console.log("Error: Habits must be an array");
            return res.status(400).json({ error: "Habits must be an array" });
        }

        // Create the stack without habits first
        const createdStack = await db.Stack.create(stackData);

        // Now, add habits to the stack one by one
        for (const habitId of habits) {
            const habitToAdd = await db.Habit.findById(habitId);
            if (habitToAdd) {
                createdStack.habits.push(habitToAdd);
            }
        }

        // Save the updated stack with habits
        await createdStack.save();

        console.log("Stack created successfully:", createdStack);

        res.status(201).json({ message: "Stack created", data: createdStack });
    } catch (err) {
        console.error("Error creating stack:", err.message);
        res.status(400).json({ error: err.message });
    }
};



// const createStack = async (req, res) => {
//     try{
//         const createdStack = await db.Stack.create(req.body)
//         createdStack.save()
//         if(!createdStack){
//             res.status(400).json({message: "Cannot create Stack"})
//         }
//         else {
//             res.status(201).json({message: "Stack created", data: createdStack})
//         }
//     } catch(err) {
//         res.status(400).json({error: err.message})
//     }
//     //res.send('createStack')
// }


//Stack UPDATE ROUTE
const updateStack = async (req, res) => {
    try{
        const updatedStack = await db.Stack.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updatedStack){
            res.status(400).json({message: 'Could not update Stack'})
        } else {
            res.status(200).json({Data: updatedStack, message: "Stack updated"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


//Stack DESTROY ROUTE
const deleteStack = async (req, res) => {
    try {
        const deletedStack = await db.Stack.findByIdAndDelete(req.params.id)
        if(!deletedStack){
            res.status(400).json({message: 'Could not delete Stack'})
        } else {
            res.status(200).json({Data: deletedStack, message: "Stack deleted"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


module.exports = {
    getStack,
    createStack,
    updateStack, 
    deleteStack
}