const router  = require('express').Router() 

const courseController = require('../controllers/courseController')


router.post('/',courseController.addCourse)
router.get('/',courseController.getAllCourse)

module.exports = router