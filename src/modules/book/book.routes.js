const express = require('express');
const { validationMiddleware } = require('../../middlewares');
const { bookSchema } = require('./book.validation');
const bookController = require('./book.controller');

const router = express.Router();

router.post('/', validationMiddleware(bookSchema.book), bookController.createBook);
router.get('/', validationMiddleware(bookSchema.queryParams), bookController.getAllBooks);
router.get('/recommended', validationMiddleware(bookSchema.queryParams), bookController.getRecommendedBooks);
router.get('/:id', bookController.getBook);
router.patch('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
