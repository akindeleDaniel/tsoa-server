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
exports.UpdateController = void 0;
const tsoa_1 = require("tsoa");
const user_model_1 = __importDefault(require("../models/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
let UpdateController = class UpdateController extends tsoa_1.Controller {
    async updateUser(email, body) {
        try {
            const updateData = {};
            if (body.password) {
                updateData.password = await bcrypt_1.default.hash(body.password, 10);
            }
            if (body.firstName)
                updateData.firstName = body.firstName;
            if (body.lastName)
                updateData.lastName = body.lastName;
            if (body.dob)
                updateData.dob = body.dob;
            if (body.gender)
                updateData.gender = body.gender;
            const updatedUser = await user_model_1.default.findByIdAndUpdate({ email }, { $set: updateData }, { new: true, select: "-password" });
            if (!updatedUser) {
                this.setStatus(404);
                return { message: "User not found" };
            }
            this.setStatus(200);
            return updatedUser;
        }
        catch (err) {
            console.error(err);
            this.setStatus(500);
            return { message: "Error updating user", error: err };
        }
    }
};
exports.UpdateController = UpdateController;
__decorate([
    (0, tsoa_1.Put)("{email}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UpdateController.prototype, "updateUser", null);
exports.UpdateController = UpdateController = __decorate([
    (0, tsoa_1.Route)("user"),
    (0, tsoa_1.Tags)("User")
], UpdateController);
//# sourceMappingURL=update.js.map