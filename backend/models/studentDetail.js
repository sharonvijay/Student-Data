import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  Name: String,
  RegNo: String,
  Age: Number,
  Course: String,
});

const studentDetail = mongoose.model("studenDetail", studentSchema);
export default studentDetail;
