import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, enum: ["male", "female","others"], required: true },
    dob: { type: String, required: true },
    email: { type: String, required: true, unique: true,lowercase:true,trim:true },
    password: { type: String, required: true },
},
{timestamps:true}
)

export default mongoose.model("User", UserSchema)
