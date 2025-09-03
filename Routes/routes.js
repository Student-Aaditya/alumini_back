const controller=require("../Controllers/controller");
const express=require("express");
const router=express.Router();
const passport=require("passport");
const passportLocal=require("passport-local");
const passportLocalMongoose=require("passport-local-mongoose");
const imageUpload  = require("../Service/cloudConfig");


router.post("/user/signUp",controller.signUp);
router.get("/user/login",controller.logIn)
router.post("/user/login",passport.authenticate("local", { failureRedirect: "/user/login", failureFlash: true }),controller.logIn);
router.get("/user/sms",controller.smsRoute);
router.get("/user/email",controller.emailRoute);
router.post("/user/upload",imageUpload.single("file"),controller.uploadImage);

module.exports=router;