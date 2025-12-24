import { Controller } from "tsoa";
import type { CreateUser } from "../models/User";
export declare class userControllerRegister extends Controller {
    register(body: CreateUser): Promise<{
        message: string;
        user: {
            firstName: string;
            lastName: string;
            email: string;
            dob: string;
            gender: "male" | "female";
        };
    }>;
}
//# sourceMappingURL=register.d.ts.map