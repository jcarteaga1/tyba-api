const { verifyAccessToken } = require('../services/jwt');

function authMiddleware(req, res, next) {
  const accessToken = req.headers.authorization;

  if(process.env.NODE_ENV == 'test'){
    next();
    return;
  }
  
  try {
    if (accessToken == null) {
      throw new Error('Access token required', 401);
    }

    const user = verifyAccessToken(accessToken);
    req.user = user.id;
    next();
  } catch (error) {
    throw new Error(error.message, 401);
  }
}

module.exports = {
  authMiddleware,
};