import jwt from 'jsonwebtoken';
import env from '../config/env.js';

export const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token)
    return res
      .status(401)
      .json({ success: false, msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, env.jwtSecret);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ success: false, msg: 'Token is not valid' });
  }
};
