const bcrypt = require('bcryptjs');
const { User } = require('../db/models')
const { UserSchema, UserLoginSchema } = require('../schemas/user')
const { generateAccessToken } = require('../services/jwt')


const createUser = async (req, res) => {
    try {
        const { value, error } = UserSchema.validate(req.body);
        if (error) throw error;

        const user =  await User.create(value);  
        res.status(200).json({ message: `User ${user.firstName} created` });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const loginUser = async (req, res) => {
    try {
        const { value, error } = UserSchema.validate(req.body);
        if (error) throw error;

        const findUser = await User.findOne({ where:{ email: value.email }, raw:true })

        if (!findUser) throw new Error('user does not exist');

        if (!bcrypt.compareSync(value.password, findUser.password)) {
            throw new Error('Incorrect password');
        }

        const accessToken = generateAccessToken(findUser.id);
        res.status(200).json({ ...findUser, token: accessToken });

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { createUser, loginUser };