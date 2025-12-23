import { Controller } from "tsoa";
export declare class userController extends Controller {
    login(body: {
        email: string;
        password: string;
    }): {
        message: string;
        email: string;
    };
}
//# sourceMappingURL=controller.d.ts.map