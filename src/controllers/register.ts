import { Controller,Post,Route,Body,Tags } from "tsoa"
import type { CreateUser } from "../models/User"
import bcrypt from "bcrypt"

@Route("user")
@Tags("User")
export class userControllerRegister extends Controller{
    @Post("register")
    public async register(@Body() body:CreateUser){
        const hidePassword= await bcrypt.hash(body.password, 10)

        const user ={
            firstName:body.firstName,
            lastName:body.lastName,
            password:hidePassword,
            email:body.email,
            dob:body.dob,
            gender:body.gender
        }
        const{password, ...userWithoutPassword}=user
        return{
            message:"Registration successful",
            user:userWithoutPassword
        }
    }
}