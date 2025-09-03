require("dotenv").config();
    
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async () => {
  const msg = {
    to: "dinesh.chand0029@gmail.com", 
    from: "aadityakuamr518@gmail.com", 
    subject: "Hello from SendGrid + Node.js",
    text: "This is a plain text email.",
    html: "<strong>This is an HTML email 🚀</strong>",
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error("❌ Error sending email:", error);
    if (error.response) {
      console.error(error.response.body); 
    }
  }
};

sendEmail();
