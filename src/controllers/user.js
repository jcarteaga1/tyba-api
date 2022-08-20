const { User } = require('../db/models')
const { UserSchema } = require('../schemas/user')


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

module.exports = { createUser };