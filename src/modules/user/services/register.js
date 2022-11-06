const { User } = require('../../../database/models');
const { bcrypt } = require('../../../utils');

module.exports = async (user) => {
    user.password = await bcrypt.generatePassword(user.password);
    const newUser = new User(user);
    const response = await newUser.save();
    return {
        id: response._id,
        name: response.name,
        email: response.email,
    };
};
