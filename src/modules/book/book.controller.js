const { responseHelper } = require('../../helpers');
const bookService = require('./services');

exports.getAllBooks = async (req, res, next) => {
    try {
        const response = await bookService.getAllBooks(req.user.id, req.query);
        return responseHelper.success(res, response);
    } catch (error) {
        next(error);
    }
};

exports.getRecommendedBooks = async (req, res, next) => {
    try {
        const response = await bookService.getRecommendedBooks(req.user.id, req.query);
        return responseHelper.success(res, response);
    } catch (error) {
        next(error);
    }
};

exports.createBook = async (req, res, next) => {
    try {
        const response = await bookService.createBook(req.files, req.body, req.user.id);
        return responseHelper.created(res, response);
    } catch (error) {
        next(error);
    }
};

exports.getBook = async (req, res, next) => {
    try {
        const response = await bookService.getBook(req.params.id, req.user.id);
        return responseHelper.success(res, response);
    } catch (error) {
        next(error);
    }
};

exports.updateBook = async (req, res, next) => {
    try {
        const response = await bookService.updateBook(req.params.id, req.user.id, req.body);
        return responseHelper.success(res, response);
    } catch (error) {
        next(error);
    }
};

exports.deleteBook = async (req, res, next) => {
    try {
        const response = await bookService.deleteBook(req.params.id, req.user.id);
        return responseHelper.success(res, response);
    } catch (error) {
        next(error);
    }
};
