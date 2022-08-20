const Joi = require('joi');
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = Joi.extend(joiPasswordExtendCore);

const UserSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: joiPassword.string()
      .minOfSpecialCharacters(1)
      .minOfLowercase(1)
      .minOfUppercase(1)
      .minOfNumeric(1)
      .noWhiteSpaces()
      .required(),
});

const UserLoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = { UserSchema, UserLoginSchema }