const mongoose=require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  targetBranch: [String],
  targetYear: [Number],
  notifyStudents: { type: Boolean, default: false },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bannerImage: String // cloud hashed link
}, { timestamps: true });

const Event=  mongoose.model("Event", eventSchema);
module.exports=Event