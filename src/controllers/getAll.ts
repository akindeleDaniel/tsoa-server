import { Controller,Get,Route,Tags } from "tsoa"
import userModel from "../models/user.model"

@Route("user")
@Tags("User")
export class getAllController extends Controller {

    @Get("users")
  public async getAllUsers(){
    try {
      const users = await userModel.find({}, "-password")
      return users
    } catch (err) {
      this.setStatus(500)
      return []
    }
  }
}
