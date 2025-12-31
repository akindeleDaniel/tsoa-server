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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllController = void 0;
const tsoa_1 = require("tsoa");
const user_model_1 = __importDefault(require("../models/user.model"));
let getAllController = class getAllController extends tsoa_1.Controller {
    async getAllUsers() {
        try {
            const users = await user_model_1.default.find({}, "-password");
            return users;
        }
        catch (err) {
            this.setStatus(500);
            return [];
        }
    }
};
exports.getAllController = getAllController;
__decorate([
    (0, tsoa_1.Get)("users"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], getAllController.prototype, "getAllUsers", null);
exports.getAllController = getAllController = __decorate([
    (0, tsoa_1.Route)("user"),
    (0, tsoa_1.Tags)("User")
], getAllController);
//# sourceMappingURL=getAll.js.map