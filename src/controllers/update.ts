
import { Controller, Put, Route, Body, Path, Tags } from "tsoa"
import userModel from "../models/user.model"
import bcrypt from "bcrypt"

interface UpdateUserRequest {
  email?: string
  password?: string
  firstName?: string
  lastName?: string
  dob?: string
  gender?: "male" | "female" | "other"
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
      const updateData: any = {}

      if (body.password) {
        updateData.password = await bcrypt.hash(body.password, 10)
      }
      if (body.firstName) updateData.firstName = body.firstName
      if (body.lastName) updateData.lastName = body.lastName
      if (body.dob) updateData.dob = body.dob
      if (body.gender) updateData.gender = body.gender

      const updatedUser = await userModel.findByIdAndUpdate(
        {email},
        { $set: updateData },
        { new: true, select: "-password" } 
      )

      if (!updatedUser) {
        this.setStatus(404)
        return { message: "User not found" }
      }
      this.setStatus(200)
      return updatedUser
    } catch (err) {
      console.error(err)
      this.setStatus(500)
      return { message: "Error updating user", error: err }
    }
  }
}
