import UserModel from "../models/user.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";


export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are rerquired",
    });
  }

  try {
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await UserModel.create({
      name,
      email,
      password,
    });

    if (!user) {
      return res.status(400).json({
        succes: false,
        message: "Error while creating user in database",
      });
    }
    
    const token = crypto.randomBytes(32).toString("hex");

    user.verificationToken = token;

    await user.save();

    // create transporter class
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.GMAIL_HOST,
      port: process.env.GMAIL_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SENDER_GMAIL,
      to: user.email,
      subject: "Verify your account",
      text: `Please click on the following link:
            ${process.env.BASE_URL}/api/v1/users/verify/${token}`, // plain text body
      html: `
                <h1>Click here to verify your account</h1>

                <a href=${process.env.BASE_URL}/api/v1/users/verify/${token} >${process.env.BASE_URL}/api/v1/users/verify/${token}</a>
            `,
    };

    const isMailSend = await transporter.sendMail(mailOptions);
    if (!isMailSend) {
      return res.status(201).json({
        success: false,
        message: "Error while sending email",
      });
    }
    return res.status(201).json({
      success: true,
      message: "User register successfully",
    });
  } catch (error) {
    console.log("Error while registering user ", error);
    return res.status(500).json({
      success: false,
      message: "Error while registering user",
    });
  }
};

export const login = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }
    try {
        const user = await UserModel.findOne({email: email})

        if(!user){
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            })
        }
        if(!user.isVerified){
            return res.status(400).json({
                success: false,
                message: "Please verify your email"
            })
        }
        // match password
        const isMatched = await bcrypt.compare(password, user.password)
        if (!isMatched) {
            res.status(400).json({
                success: false,
                message: "Invalid email or password!"
            })
        }


        const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET, {
            expiresIn: "2d"
        })

        const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 2 * 24 * 60 * 60 * 1000
        }
        res.cookie("token", token, cookieOptions)
         // send response
        res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                role: user.role,
                email: user.email,
                avatar: user.avatar
            }
        })
    } catch (error) {
        console.log("error while logging user ", error)
        res.status(500).json({
            success: false,
            message: "Error while login"
        })

    }

};

export const logout = async (req, res) => {
    try {
    res.clearCookie("token");
    return res.status(200).json({
      message: "User logged out successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error logging out user:", error);
    return res.status(500).json({
      message: "Error logging out user",
      success: false,
    });
  }
};

export const check = async (req, res) => {
    try {
    const user = req.user;
    return res.status(200).json({
      message: "User authenticated successfully",
      success: true,
      user
    });
  } catch (error) {
    console.error("Error while checking user.", error);
    return res.status(500).json({
      message: "Error while checking user.",
      success: false,
    });
  }
};

export const verify = async (req, res) => {
  const { token } = req.params;

  if (!token) {
    return res.status(400).json({
      success: false,
      messag: "Invalid token",
    });
  }

  try {
    const user = await UserModel.findOne({
      verificationToken: token,
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        messag: "Invalid token",
      });
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save()

    return res.status(200).json({
        success: true,
        message: "User verified successfully"
    })
  } catch (error) {
    console.log("Error while verifying user", error)
      return res.status(200).json({
        success: true,
        message: "Error while verifying user"
    })
  }
};

export const forgetPassword = async (req, res) => {};
