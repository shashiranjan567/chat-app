import jwt from 'jsonwebtoken';
export const generateToken = (userId, res) => {

    // yaha token generate kr rhe hai

    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })

    res.cookie("jwt", token, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // ms
        httpOnly: true,  // prevent cookie from being accessed by client side js
        sameSite: "none", // allow cross-site cookies
        secure: true // always secure in production
    })
    return token;
}