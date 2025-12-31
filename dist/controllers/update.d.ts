import { Controller } from "tsoa";
interface UpdateUserRequest {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    dob?: string;
    gender?: "male" | "female" | "other";
}
export declare class UpdateController extends Controller {
    updateUser(email: string, body: UpdateUserRequest): Promise<(import("mongoose").Document<unknown, {}, {
        firstName: string;
        lastName: string;
        gender: "male" | "female" | "other";
        dob: string;
        email: string;
        password: string;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        firstName: string;
        lastName: string;
        gender: "male" | "female" | "other";
        dob: string;
        email: string;
        password: string;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | {
        message: string;
        error?: undefined;
    } | {
        message: string;
        error: unknown;
    }>;
}
export {};
//# sourceMappingURL=update.d.ts.map