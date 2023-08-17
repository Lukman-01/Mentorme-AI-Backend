require("dotenv").config();
const mongoose = require("mongoose");

const {Mongo_Url} = process.env;

const connectToDB = async () =>{
    try {
        await mongoose.connect(Mongo_Url,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
    }
};

connectToDB();