const path = require('path');
const { BadRequestException } = require('../helpers/errorResponse');

exports.createImage = async (file) => {
    if (!file) throw new BadRequestException('No File Uploaded');
    const bookImage = file.imageUrl;
    const extensionName = path.extname(bookImage.name);
    const allowedExtension = ['.png', '.jpg', '.jpeg'];
    if (!allowedExtension.includes(extensionName)) throw new BadRequestException('Please Upload a valid Image');
    const imagePath = path.join(__dirname, '../uploads/' + `${bookImage.name}`);
    await bookImage.mv(imagePath);
    return `/uploads/${bookImage.name}`;
};
