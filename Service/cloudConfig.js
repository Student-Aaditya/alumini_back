const multer = require("multer");

const imageUpload = multer({

  dest: "uploads/",
  fileFilter: (req, file, cb) => {

    const allowedTypes = /jpeg|jpg|png|webp/;
    const ext = allowedTypes.test(file.originalname.toLowerCase());
    const mime = allowedTypes.test(file.mimetype);

    if (ext && mime) {
      cb(null, true); 
    } else {
      cb(new Error("Only .jpg, .jpeg, .png, .webp formats allowed!"), false);
    }
  },
});
module.exports=imageUpload;