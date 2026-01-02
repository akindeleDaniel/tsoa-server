"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = RegisterRoutes;
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const update_1 = require("./controllers/update");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const register_1 = require("./controllers/register");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const ping_1 = require("./controllers/ping");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const login_1 = require("./controllers/login");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const getAll_1 = require("./controllers/getAll");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const delete_1 = require("./controllers/delete");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "mongoose.ObjectIdToString_Omit_mongoose.Require_id_DocType-and-TVirtuals_.__v__": {
        "dataType": "refAlias",
        "type": { "ref": "mongoose.ObjectIdToString_Omit_mongoose.Require_id_DocType-and-TVirtuals_.__v__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "mongoose.Document_unknown.__._firstName-string--lastName-string--gender-male-or-female-or-others--dob-string--email-string--password-string_-and-mongoose.DefaultTimestampProps._id-string_._timestamps-true__": {
        "dataType": "refAlias",
        "type": { "ref": "mongoose.ObjectIdToString_Omit_mongoose.Require_id_DocType-and-TVirtuals_.__v__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick__firstName-string--lastName-string--gender-male-or-female-or-others--dob-string--email-string--password-string_-and-mongoose.DefaultTimestampProps-and-__id-mongoose.Types.ObjectId_-and-___v-number_.Exclude_keyof_firstName-string--lastName-string--gender-male-or-female-or-others--dob-string--email-string--password-string_-and-mongoose.DefaultTimestampProps-and-__id-mongoose.Types.ObjectId_-and-___v-number_.id__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": {}, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit__firstName-string--lastName-string--gender-male-or-female-or-others--dob-string--email-string--password-string_-and-mongoose.DefaultTimestampProps-and-__id-mongoose.Types.ObjectId_-and-___v-number_.id_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick__firstName-string--lastName-string--gender-male-or-female-or-others--dob-string--email-string--password-string_-and-mongoose.DefaultTimestampProps-and-__id-mongoose.Types.ObjectId_-and-___v-number_.Exclude_keyof_firstName-string--lastName-string--gender-male-or-female-or-others--dob-string--email-string--password-string_-and-mongoose.DefaultTimestampProps-and-__id-mongoose.Types.ObjectId_-and-___v-number_.id__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateUserRequest": {
        "dataType": "refObject",
        "properties": {
            "password": { "dataType": "string" },
            "firstName": { "dataType": "string" },
            "lastName": { "dataType": "string" },
            "dob": { "dataType": "string" },
            "email": { "dataType": "string" },
            "gender": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["male"] }, { "dataType": "enum", "enums": ["female"] }, { "dataType": "enum", "enums": ["others"] }] },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NativeDate": {
        "dataType": "refAlias",
        "type": { "dataType": "string", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "mongoose.Types.ObjectId": {
        "dataType": "refAlias",
        "type": { "dataType": "string", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    const argsUpdateController_updateUser = {
        email: { "in": "path", "name": "email", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "UpdateUserRequest" },
    };
    app.put('/user/:email', ...((0, runtime_1.fetchMiddlewares)(update_1.UpdateController)), ...((0, runtime_1.fetchMiddlewares)(update_1.UpdateController.prototype.updateUser)), async function UpdateController_updateUser(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUpdateController_updateUser, request, response });
            const controller = new update_1.UpdateController();
            await templateService.apiHandler({
                methodName: 'updateUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsRegisterController_register = {
        body: { "in": "body", "name": "body", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "password": { "dataType": "string", "required": true }, "email": { "dataType": "string", "required": true }, "dob": { "dataType": "string", "required": true }, "gender": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["male"] }, { "dataType": "enum", "enums": ["female"] }, { "dataType": "enum", "enums": ["others"] }], "required": true }, "lastName": { "dataType": "string", "required": true }, "firstName": { "dataType": "string", "required": true } } },
    };
    app.post('/user/register', ...((0, runtime_1.fetchMiddlewares)(register_1.RegisterController)), ...((0, runtime_1.fetchMiddlewares)(register_1.RegisterController.prototype.register)), async function RegisterController_register(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsRegisterController_register, request, response });
            const controller = new register_1.RegisterController();
            await templateService.apiHandler({
                methodName: 'register',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsPingController_ping = {};
    app.get('/ping', ...((0, runtime_1.fetchMiddlewares)(ping_1.PingController)), ...((0, runtime_1.fetchMiddlewares)(ping_1.PingController.prototype.ping)), async function PingController_ping(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsPingController_ping, request, response });
            const controller = new ping_1.PingController();
            await templateService.apiHandler({
                methodName: 'ping',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsLoginController_login = {
        body: { "in": "body", "name": "body", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "password": { "dataType": "string", "required": true }, "email": { "dataType": "string", "required": true } } },
    };
    app.post('/user/login', ...((0, runtime_1.fetchMiddlewares)(login_1.LoginController)), ...((0, runtime_1.fetchMiddlewares)(login_1.LoginController.prototype.login)), async function LoginController_login(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsLoginController_login, request, response });
            const controller = new login_1.LoginController();
            await templateService.apiHandler({
                methodName: 'login',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsgetAllController_getAllUsers = {};
    app.get('/user/users', ...((0, runtime_1.fetchMiddlewares)(getAll_1.getAllController)), ...((0, runtime_1.fetchMiddlewares)(getAll_1.getAllController.prototype.getAllUsers)), async function getAllController_getAllUsers(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsgetAllController_getAllUsers, request, response });
            const controller = new getAll_1.getAllController();
            await templateService.apiHandler({
                methodName: 'getAllUsers',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_deleteUser = {
        email: { "in": "query", "name": "email", "required": true, "dataType": "string" },
        notFound: { "in": "res", "name": "404", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "message": { "dataType": "string", "required": true } } },
    };
    app.delete('/user/delete', ...((0, runtime_1.fetchMiddlewares)(delete_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(delete_1.UserController.prototype.deleteUser)), async function UserController_deleteUser(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_deleteUser, request, response });
            const controller = new delete_1.UserController();
            await templateService.apiHandler({
                methodName: 'deleteUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
//# sourceMappingURL=routes.js.map