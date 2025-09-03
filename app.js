require("dotenv").config();

const express=require("express");
const app=express();
const port=7023;
const routes=require("./Routes/routes.js");
const main=require("./Config/database.js");
const passport=require("passport");
const passportLocal=require("passport-local");
const passportLocalMongoose=require("passport-local-mongoose");
const session=require("express-session");
const User=require("./Model/user.models.js");
const helmet=require("helmet");
const morgan=require("morgan");
const path=require("path");


try{
    main()
}catch(err){
    console.log(err);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"view"));

app.use(morgan("dev"));
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "default-src": ["'self'"],
        "script-src": [
          "'self'",
          "https://checkout.razorpay.com",  // Razorpay checkout script
          "'unsafe-inline'"                 // allow inline scripts (or switch to nonce/hash)
        ],
        "frame-src": [
          "'self'",
          "https://api.razorpay.com",
          "https://checkout.razorpay.com"
        ],
        "connect-src": [
          "'self'",
          "https://api.razorpay.com"
        ],
        "img-src": ["'self'", "data:", "https:"],
        "style-src": ["'self'", "'unsafe-inline'"],
      },
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:"sihSession",
    saveUninitialized:false,
    resave:true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal(User.authenticate())); 

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.get("/",(req,res)=>{
    res.status(200).json({msg:"hello world"});
})

app.use("/",routes);

app.listen(port,(req,res)=>{
    console.log(`server working on ${port}`);
})