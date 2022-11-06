const { paginate } = require('../../../utils');
const { Book } = require('../../../database/models');
const { Op } = require('sequelize');

module.exports = async (_id, query) => {
    const { page, size } = query;
    const { limit, offset } = paginate.getPagination(page, size);
    return Book.findAndCountAll({
        where: { userId: { [Op.ne]: _id } },
        limit,
        offset,
        attributes: ['id', 'name', 'author', 'imageUrl', 'userId', 'pages', 'price'],
    }).then((data) => {
        const response = paginate.getPagingData(data, page, limit);
        return response;
    });
};
