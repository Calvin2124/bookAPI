const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

router.get('/', authorController.getAllAuthors);
router.post('/', authorController.createAuthor);

router.delete('/delete/:id', authorController.deleteAuthor);
router.patch('/update/:id', authorController.updateAuthor);

router.get('/:id', authorController.getAuthor);


module.exports = router;