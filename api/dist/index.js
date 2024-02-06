"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Hello');
});
app.get('/api/env', (req, res) => {
    res.send(process.env.ENV_DATA || '[[server]]');
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
