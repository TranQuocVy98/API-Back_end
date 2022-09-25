const { Course, User } = require('../model/model')

const courseController = {
    addCourse : async (req, res) => {
    try {
        const newCourse = new Course(req.body)
        const savedCourse = await newCourse.save()
        res.status(200).json(savedCourse)
    } catch(err) {
            
        res.status(500).json(err)
    }
    } ,

    getAllCourse : async (req, res) => {

        try {
            const course =  await Course.find()
            res.status(200).json(course)
        } catch(err) {
                
            res.status(500).json(err)
        }

    },


}

module.exports = courseController