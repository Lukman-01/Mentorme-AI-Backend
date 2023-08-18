const jwt = require("jsonwebtoken");
const {TOKEN_EXPIRY, TOKEN_KEY} = process.env;

const creatToken = async (
    tokenData,
    tokenKey = TOKEN_KEY,
    expiresIn = TOKEN_EXPIRY
) =>{
    try {
        const token = await jwt.sign(tokenData,tokenKey, {expiresIn});
        return token;
    } catch (error) {
        throw error;
    }
};

module.exports = creatToken;