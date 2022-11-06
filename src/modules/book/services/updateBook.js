const { NotFoundException } = require('../../../helpers/errorResponse');
const { Book } = require('../../../database/models');
const { MESSAGES } = require('../../../config');

module.exports = async (_id, user, body) => {
    await Book.update(body, {
        where: { id: _id, userId: user },
    });
    const book = await Book.findOne({
        where: {
            id: _id,
            userId: user,
        },
    });
    if (!book) throw new NotFoundException(MESSAGES.BOOK.ID.NOT_FOUND + ` ${_id}`);
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
