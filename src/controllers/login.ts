import { Controller,Post,Body,Route,Tags } from "tsoa"
@Route("user")
@Tags("User")
export class userControllerlogin extends Controller{
    @Post("login")
    public login(
        @Body() body:{email:string; password:string}
    ) {
        return{
            message :"Login endpoint working",
            email:body.email
        }
    }
}