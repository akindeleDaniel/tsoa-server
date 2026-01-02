import { Controller } from "tsoa";
interface UpdateUserRequest {
    password?: string;
    firstName?: string;
    lastName?: string;
    dob?: string;
    email?: string;
    gender?: "male" | "female" | "others";
}
export declare class UpdateController extends Controller {
    updateUser(email: string, body: UpdateUserRequest): Promise<{
        message: string;
        user?: undefined;
        error?: undefined;
    } | {
        message: string;
        user: import("mongoose").Document<unknown, {}, {
            firstName: string;
            lastName: string;
            gender: "male" | "female" | "others";
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
            gender: "male" | "female" | "others";
            dob: string;
            email: string;
            password: string;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        };
        error?: undefined;
    } | {
        message: string;
        error: unknown;
        user?: undefined;
    }>;
}
export {};
//# sourceMappingURL=update.d.ts.map