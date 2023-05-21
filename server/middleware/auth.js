import { connectionDB } from "../models/NewsDB.js";
import jwt from 'jsonwebtoken';

// Authentication processing middleware
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.x_auth;

    if (!token) {
      return res.json({ isAuth: false,  error: 'No authentication token provided' });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.json({ isAuth: false, error: 'Invalid authentication token' });
  }
};

export default authMiddleware;