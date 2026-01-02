import { Controller,Post,Route,Body,Tags } from "tsoa"
import userModel from "../models/user.model"
import bcrypt from "bcrypt"

@Route("user")
@Tags("User")
export class RegisterController extends Controller{
    @Post("register")
    public async register(@Body() body:{
        firstName:string,
        lastName:string,
        gender:"male"|"female"|"others",
        dob:string,
        email:string,
        password:string
    }
){
    try {
        const existingUser= await userModel.findOne({email:body.email})
        if(existingUser){
        this.setStatus(409)
        return {
            message: "User already exists"
        }
    }

    const hidePassword= await bcrypt.hash(body.password, 10)

    const user = new userModel({
        firstName:body.firstName,
        lastName:body.lastName,
        password:body.password,
        email:body.email.toLowerCase().trim(),
        dob:body.dob,
        gender:body.gender
    })
    await user.save()
    this.setStatus(201)
    const obj = typeof user.toObject === "function" ? user.toObject() : user
    const{password, ...userWithoutPassword}=obj
    return{
        message:"Registration successful",
        user:userWithoutPassword
    }
} catch (error) {
    console.error(error)
    this.setStatus(500)
    return {
        message:"Internal server error"
    }
}
}
}