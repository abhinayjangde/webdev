import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Unathorized - invalid token",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById({
      _id: decoded.id,
    }).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "Unauthorized - User not found",
        success: false,
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("error while authentication in middleware ", error);
    return res.status(500).json({
      success: false,
      message: "Error while authenticating",
    });
  }
};
