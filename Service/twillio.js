const twilio=require("twilio");
const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

async function Sms(username,phoneNo) {
    try{
        const sms= await client.messages.create({
            body:`Hello SIH Team Member ${username}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phoneNo
        })
        console.log("sms sent successful");
    }catch(err){
        console.log(err);
    }
}

module.exports=Sms;