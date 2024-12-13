import mongoose from "mongoose";
 
const assignmentSchema = new mongoose.Schema({
  name: String,
  description: String,
  course: String,
}, {
  collection: "assignments"
});
 
export default assignmentSchema;