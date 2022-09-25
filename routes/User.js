const router  = require('express').Router() 

const userController = require('../controllers/userController')


router.post('/',userController.addUser)
router.get('/',userController.getAllUsers)

module.exports = router 


