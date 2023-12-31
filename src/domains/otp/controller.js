const OTP = require("./model");
const generateOTP = require("./../../utils/generateOTP");
const sendEmail = require("./../../utils/sendEmail");
const {AUTH_EMAIL} = process.env;
const {hashData} = require("./../../utils/hashData");

const sendOTP = async({email, subject, message, duration = 1}) =>{
    try {
        if(!(email&&subject&&message)){
            throw Error("Provide values for email, subject, message");
        }

        await OTP.deleteOne({email});
        const generateOTP = await generateOTP();

        const mailOptions = {
            from: AUTH_EMAIL,
            to: email,
            subject,
            html: `<p>${message}</p><p style="color:tomato; font-size:25px; letter-spacing:2px;"><b>${generateOTP}</b></p><p> This code <b>expires in {duration} hour(s)</b>.</p>`,
        };

        await sendEmail(mailOptions);

        const hashedOTP = await hashData(generateOTP);
        const newOTP = await new OTP({
            email,
            otp: hashedOTP,
            createdAt: Date.now(),
            expireAt: Date.now + 3600000 * +duration,
        });

        const createdOTPRecord = await newOTP.save();
        return createdOTPRecord;
    } catch (error) {
        throw error;
    }
};

module.exports = {sendOTP};