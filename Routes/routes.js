const controller=require("../Controllers/controller");
const express=require("express");
const router=express.Router();
const passport=require("passport");
const passportLocal=require("passport-local");
const passportLocalMongoose=require("passport-local-mongoose");
const Payment=require("../Service/razorpay.js");
const upload = require("../Service/cloudConfig");

router.post("/user/signUp",controller.signUp);
router.get("/user/login",controller.logIn)
router.post("/user/login",passport.authenticate("local", { failureRedirect: "/user/login", failureFlash: true }),controller.logIn);
router.get("/user/sms",controller.smsRoute);
router.get("/user/email",controller.emailRoute);
router.post("/user/upload",upload.single("file"),controller.uploadImage);
router.get("/user/paymentPage",Payment.viewPayment);
router.post("/user/create",Payment.createPayment);
router.post("/user/verify",Payment.verifyPayment);

module.exports=router;