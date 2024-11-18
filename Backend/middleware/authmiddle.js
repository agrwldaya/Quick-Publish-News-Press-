import jwt from "jsonwebtoken";
// import { UserModel } from "../model/user"

export const authMiddleware = async (req, res, next) => {
  
  try {
     
    let {token} = req.headers;
    console.log(token)

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided"
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded)
    req.body.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token or error in verification",
      error: error.message
    });
  }
};

 