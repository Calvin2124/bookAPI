const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);
router.post('/', bookController.createBook);

router.delete('/delete/:id', bookController.deleteBook);
router.patch('/update/:id', bookController.updateBook);

router.get('/:id', bookController.getBook);

router.patch('/updateWithAuthor/:id', bookController.updateBookWithAuthorId);

module.exports = router;