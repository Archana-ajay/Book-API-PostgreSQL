const { MESSAGES, CONSTANTS } = require('../../../config');
const { User } = require('../../../database/models');
const { BadRequestException } = require('../../../helpers/errorResponse');
const { bcrypt, jwt } = require('../../../utils');

module.exports = async (params) => {
    const { email, password } = params;

    const user = await User.findOne({ where: { email } });
    if (!user) throw new BadRequestException(MESSAGES.USER.LOGIN.INVALID_CREDS);

    const passwordMatch = await bcrypt.verifyPassword(password, user.password);
    if (!passwordMatch) throw new BadRequestException(MESSAGES.USER.LOGIN.INVALID_CREDS);

    const accessToken = jwt.generateAccessToken({ id: user.id, email: user.email, role: CONSTANTS.USER.ROLES.USER });

    return {
        success: true,
        id: user.id,
        name: user.name,
        email: user.email,
        role: CONSTANTS.USER.ROLES.USER,
        accessToken,
    };
};
