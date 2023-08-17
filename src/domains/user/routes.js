const express = require("express");
const router = express.Router();
const {createNewUser} = require("./controller");

router.post("/signup", async (req, res) =>{
    try {
        let {name, email, password} = req.body;

        name = name.trim();
        email = email.trim();
        password = password.trim();

        if(!(name&&email&&password)){
            throw Error("Empty input field");
        }else if(!/^[a-zA-Z ]*$/.test(name)){
            throw Error("Invalid name entered");
        }else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
            throw Error("Invalid email entered");
        }else if (password.length < 8){
            throw Error("password too short");
        }else {
            // genuie credentials goes here
            const newUser = await createNewUser({
                name,
                email,
                password,
            });
            res.status(200).json(newUser);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;