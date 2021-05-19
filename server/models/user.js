import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  phoneVerified: { type: Boolean, default: false },
  id: { type: String },
});

export default mongoose.model("User", userSchema);
