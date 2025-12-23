import { Controller,Get,Route, Tags } from "tsoa"
@Route("ping")
@Tags("Ping")
export class pingController extends Controller{
    @Get("/")
    public ping(){
        return{message:"pong"}
    }
}