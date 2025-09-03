const User = require("../Model/user.models.js");
const Sms = require("../Service/twillio.js");
const sendEmail = require("../Service/email.js");
const  imageUpload  = require("../Service/cloudConfig.js");
const upload=require("../Service/cloudConfig.js");

const controller = {
    signUp: async (req, res) => {
        let { username, email, password, role } = req.body;
        const newUser = new User({ email, username, role });
        const register = await User.register(newUser, password);
        console.log(register);
        res.status(200).json({ msg: "sign up " })
    },
    logIn: (req, res) => {
        let { username, password } = req.body;
        console.log(username, password);
    },
    logIn: async (req, res) => {

        res.status(200).json({ msg: "login successful" });
    },
    smsRoute: async (req, res) => {
        let { username, phone } = req.body;
        await Sms(username, phone);
    },
    emailRoute: async (req, res) => {
        await sendEmail();
        res.status(200).json({ msg: "data send successful" });
    },
    uploadImage: async (req, res) => {
      res.json({ url: req.file.path });

        }
}

module.exports = controller;