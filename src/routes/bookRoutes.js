const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middlewares/auth');

router.get('/', bookController.getAllBooks);
router.post('/add', authMiddleware, bookController.createBook);

router.delete('/delete/:id', bookController.deleteBook);
router.patch('/update/:id', bookController.updateBook);

router.get('/:id', bookController.getBook);

router.patch('/updateWithAuthor/:id', bookController.updateBookWithAuthorId);

module.exports = router;