import { Controller,Post,Body,Route,Tags } from "tsoa"
import userModel from "../models/user.model"
import bcrypt from "bcrypt"
@Route("user")
@Tags("User")
export class LoginController extends Controller{
    @Post("login")
    public async login(
        @Body() body:{email:string; password:string}
    ) {
        const email = body.email.toLowerCase().trim()
        const existingUser= await userModel.findOne({email})
        if(!existingUser){
            this.setStatus(404)
            return {
                message:"User not found"
            }
        }

        const passwordMatch= await bcrypt.compare(body.password, existingUser.password)
        if(!passwordMatch){
            this.setStatus(401)
            return {
                message:"Invalid credentials"
            }
        }
        this.setStatus(200)
        const {password, ...userWithoutPassword} = existingUser.toObject()
        return {
            message:"Login successful",
            user:userWithoutPassword
        }
    }
}