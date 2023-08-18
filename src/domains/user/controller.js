const User = require("./model");
const {hashData, verifyHashedData} = require("./../../utils/hashData");
const creatToken = require("./../../utils/createToken");

const authenticateUser = async (data) =>{
    try {
        const {email, password} = data;
        const fetchedUser = await User.findOne({email});

        if(!fetchedUser){
            throw Error("Invalid User credential error");
        };
        const hashedPassword = fetchedUser.password;
        const passwordMatch = await verifyHashedData(password,hashedPassword);

        if(!passwordMatch){
            throw Error("Invalid Password entererd")
        };

        const tokenData = {userId:fetchedUser._id, email};
        const token = await creatToken(tokenData);
        fetchedUser.token = token;
        return fetchedUser;
    } catch (error) {
        throw Error;
    }
}
const createNewUser = async (data) => {
    try {
        const {name, email, password} = data;

        const existingUser = await User.findOne({email});
        if(existingUser){
            throw Error("User with this email already exist");
        }

        const hashedPassword = await hashData(password);
        const newUser = new User({
            name,
            email,
            password:hashedPassword,
        });

        const createdUser = await newUser.save();
        return createdUser

    } catch (error) {
       throw Error; 
    }
};

module.exports = {createNewUser, authenticateUser};