"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env" });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const routes_1 = require("./routes/routes");
(0, db_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routes_1.RegisterRoutes)(app);
console.log("ENV:", process.env.MONGO_URI);
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
//# sourceMappingURL=server.js.map