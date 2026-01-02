
import { Controller, Put, Route, Body, Path, Tags } from "tsoa"
import userModel from "../models/user.model"
import bcrypt from "bcrypt"

interface UpdateUserRequest {
  password?: string
  firstName?: string
  lastName?: string
  dob?: string
  email?: string
  gender?: "male" | "female" | "others"
}

@Route("user")
@Tags("User")
export class UpdateController extends Controller {

  @Put("{email}")
  public async updateUser(
    @Path() email: string,
    @Body() body: UpdateUserRequest
  ) {
    try {
      const emailLower = email.toLowerCase().trim()
      const updateData: any = {}

      if (body.password) {updateData.password = await bcrypt.hash(body.password, 10)

      }
      if (body.firstName) updateData.firstName = body.firstName
      if (body.lastName) updateData.lastName = body.lastName
      if (body.dob) updateData.dob = body.dob
      if (body.gender) updateData.gender = body.gender
      if (body.email){
        this.setStatus(400)
        return { message: "Email cannot be updated" }
      }

      const updatedUser = await userModel.findOneAndUpdate(
        {email: emailLower},
        { $set: updateData },
        { new: true, select: "-password" } 
      )

      if (!updatedUser) {
        this.setStatus(404)
        return { message: "User not found" }
      }
      this.setStatus(200)
      return {
        message: "User updated successfully",
        user: updatedUser
      }
    } catch (err) {
      console.error(err)
      this.setStatus(500)
      return { message: "Error updating user", error: err }
    }
  }
}
