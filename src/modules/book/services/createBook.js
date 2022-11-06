const { Book } = require('../../../database/models');
const { image } = require('../../../utils');

module.exports = async (file, body, user) => {
    body.imageUrl = await image.createImage(file);
    body.userId = user;
    const book = await Book.create(body);
    return {
        success: true,
        id: book.id,
        name: book.name,
        author: book.author,
        imageUrl: book.imageUrl,
        userId: book.userId,
        pages: book.pages,
        price: book.price,
    };
};
