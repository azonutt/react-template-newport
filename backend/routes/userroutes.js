const router = require('express').Router()

const {
    Home,
    Register
} = require('../controllers/userControllers')

router.route('/register').post(register)

module.exports = router;