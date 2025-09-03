const mongoose=require("mongoose");

main().then(()=>{
    console.log("mongodb connected successful");
})
.catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/SIH");
}

module.exports=main;