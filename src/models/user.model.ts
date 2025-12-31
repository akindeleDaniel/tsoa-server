import mongoose, {Document} from "mongoose"
import bcrypt from "bcrypt"

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    dob: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

UserSchema.pre("save", async function (this: any) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10)
  }
})

export default mongoose.model("User", UserSchema)
