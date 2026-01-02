import { Controller } from "tsoa";
export declare class LoginController extends Controller {
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        message: string;
        user?: undefined;
    } | {
        message: string;
        user: {
            firstName: string;
            lastName: string;
            gender: "male" | "female" | "others";
            dob: string;
            email: string;
            createdAt: NativeDate;
            updatedAt: NativeDate;
            _id: import("mongoose").Types.ObjectId;
            __v: number;
        };
    }>;
}
//# sourceMappingURL=login.d.ts.map