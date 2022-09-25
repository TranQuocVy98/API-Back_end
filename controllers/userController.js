const { Course, User } = require('../model/model')

const userController = {
    addUser : async (req, res) => {
    try {
        const newUser = new User(req.body)
        const savedUser = await newUser.save()
        if (req.body.course) {
            const course = Course.findById(req.body.course);
            await course.updateOne({ $push : { user: savedUser._id } })
            
        }
        res.status(200).json(savedUser)
    } catch(err) {
            
        res.status(500).json(err)
    }
    } ,


    getAllUsers : async (req, res) => {
   try {
    const allUsers =  await User.find()  
    res.status(200).json(allUsers)
    

}
   catch(err) {
        res.status(500).json(err)

    }

}
}

module.exports = userController