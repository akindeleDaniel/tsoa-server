"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
const tsoa_1 = require("tsoa");
const user_model_1 = __importDefault(require("../models/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
let RegisterController = class RegisterController extends tsoa_1.Controller {
    async register(body) {
        try {
            const existingUser = await user_model_1.default.findOne({ email: body.email });
            if (existingUser) {
                this.setStatus(409);
                return {
                    message: "User already exists"
                };
            }
            const hidePassword = await bcrypt_1.default.hash(body.password, 10);
            const user = new user_model_1.default({
                firstName: body.firstName,
                lastName: body.lastName,
                password: body.password,
                email: body.email.toLowerCase().trim(),
                dob: body.dob,
                gender: body.gender
            });
            await user.save();
            this.setStatus(201);
            const obj = typeof user.toObject === "function" ? user.toObject() : user;
            const { password, ...userWithoutPassword } = obj;
            return {
                message: "Registration successful",
                user: userWithoutPassword
            };
        }
        catch (error) {
            console.error(error);
            this.setStatus(500);
            return {
                message: "Internal server error"
            };
        }
    }
};
exports.RegisterController = RegisterController;
__decorate([
    (0, tsoa_1.Post)("register"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "register", null);
exports.RegisterController = RegisterController = __decorate([
    (0, tsoa_1.Route)("user"),
    (0, tsoa_1.Tags)("User")
], RegisterController);
//# sourceMappingURL=register.js.map