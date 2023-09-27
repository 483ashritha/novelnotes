var express = require('express');
var router = express.Router();
var ctrlbooklist = require('../controller/booklist');

router.get('/booklist', ctrlbooklist.booksList);
router.post('/booklist', ctrlbooklist.booksCreate);
router.get('/booklist/:bookid', ctrlbooklist.booksReadOne);
router.put('/booklist/:bookid', ctrlbooklist.booksUpdateOne);
router.delete('/booklist/:bookid', ctrlbooklist.booksDeleteOne);

module.exports = router;