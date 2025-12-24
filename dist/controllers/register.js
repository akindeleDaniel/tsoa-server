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
exports.userControllerRegister = void 0;
const tsoa_1 = require("tsoa");
const bcrypt_1 = __importDefault(require("bcrypt"));
let userControllerRegister = class userControllerRegister extends tsoa_1.Controller {
    async register(body) {
        const hidePassword = await bcrypt_1.default.hash(body.password, 10);
        const user = {
            firstName: body.firstName,
            lastName: body.lastName,
            password: hidePassword,
            email: body.email,
            dob: body.dob,
            gender: body.gender
        };
        const { password, ...userWithoutPassword } = user;
        return {
            message: "Registration successful",
            user: userWithoutPassword
        };
    }
};
exports.userControllerRegister = userControllerRegister;
__decorate([
    (0, tsoa_1.Post)("register"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], userControllerRegister.prototype, "register", null);
exports.userControllerRegister = userControllerRegister = __decorate([
    (0, tsoa_1.Route)("user"),
    (0, tsoa_1.Tags)("User")
], userControllerRegister);
//# sourceMappingURL=register.js.map