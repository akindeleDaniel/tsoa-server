import { Controller } from "tsoa";
export declare class getAllController extends Controller {
    getAllUsers(): Promise<(import("mongoose").Document<unknown, {}, {
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
    })[]>;
}
//# sourceMappingURL=getAll.d.ts.map