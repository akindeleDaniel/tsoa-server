import { Controller, Delete, Route, Tags, Query, Res } from "tsoa"
import type { TsoaResponse } from "tsoa"
import userModel from "../models/user.model"

@Route("user")
@Tags("User")
export class UserController extends Controller {
  @Delete("delete")
  public async deleteUser(
    @Query() email: string,
    @Res() notFound: TsoaResponse<404, { message: string }>
  ) {
    const user = await userModel.findOneAndDelete({ email });

    if (!user) {
      return notFound(404, { message: "User not found" });
    }

    return { message: "User deleted successfully" };
  }
}
