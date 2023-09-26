require('dotenv').config();
var express = require('express');
var router = express.Router();


// Import your controllers
var ctrlhome = require('../controllers/home');
var ctrluser = require('../controllers/user')
router.get('/', ctrlhome.home);
router.get('/booklist',ctrlhome.booklist);
router.get('/pride', ctrlhome.pride);
router.get('/george', ctrlhome.george);
router.get('/great', ctrlhome.great);
router.get('/aboutus', ctrluser.aboutus);
router.get('/topbooks',ctrluser.topbooks);
router.get('/login', ctrluser.login);
router.get('/register', ctrluser.register);



module.exports = router;
