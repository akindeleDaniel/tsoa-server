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
exports.LoginController = void 0;
const tsoa_1 = require("tsoa");
const user_model_1 = __importDefault(require("../models/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
let LoginController = class LoginController extends tsoa_1.Controller {
    async login(body) {
        const email = body.email.toLowerCase().trim();
        const existingUser = await user_model_1.default.findOne({ email });
        if (!existingUser) {
            this.setStatus(404);
            return {
                message: "User not found"
            };
        }
        console.log("Input password:", body.password);
        console.log("Stored hash:", existingUser.password);
        const passwordMatch = await bcrypt_1.default.compare(body.password, existingUser.password);
        console.log("Password match:", passwordMatch);
        if (!passwordMatch) {
            this.setStatus(401);
            return {
                message: "Invalid credentials"
            };
        }
        this.setStatus(200);
        const { password, ...userWithoutPassword } = existingUser.toObject();
        return {
            message: "Login successful",
            user: userWithoutPassword
        };
    }
};
exports.LoginController = LoginController;
__decorate([
    (0, tsoa_1.Post)("login"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "login", null);
exports.LoginController = LoginController = __decorate([
    (0, tsoa_1.Route)("user"),
    (0, tsoa_1.Tags)("User")
], LoginController);
//# sourceMappingURL=login.js.map