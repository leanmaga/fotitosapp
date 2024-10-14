import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  bio: String,
  profile_picture: String,
  social_links: {
    twitter: String,
    instagram: String,
    facebook: String,
  },
});

export default mongoose.models.User || mongoose.model("User", schema);
