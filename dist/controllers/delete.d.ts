import { Controller } from "tsoa";
import type { TsoaResponse } from "tsoa";
export declare class UserController extends Controller {
    deleteUser(email: string, notFound: TsoaResponse<404, {
        message: string;
    }>): Promise<any>;
}
//# sourceMappingURL=delete.d.ts.map