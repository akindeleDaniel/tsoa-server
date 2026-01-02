"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = __importDefault(require("./models/user.model"));
async function main() {
    const user = await user_model_1.default.findOne({ email: "dkate@gmail.com" });
    if (!user) {
        console.error("User not found");
        return;
    }
    console.log("Stored hash:", user.password);
    const match = await bcrypt_1.default.compare("thePasswordYouSet", user.password);
    console.log("Password match?", match);
}
main().catch(console.error);
//# sourceMappingURL=test.js.map