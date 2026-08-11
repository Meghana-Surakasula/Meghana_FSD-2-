"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
// Route parameter
app.get("/users/:id", (req, res) => {
    res.send("User ID: " + req.params.id);
});
// Multiple route parameters
app.get("/users/:userId/posts/:postId", (req, res) => {
    res.send("User ID: " + req.params.userId +
        ", Post ID: " + req.params.postId);
});
// Query parameter
app.get("/search", (req, res) => {
    res.send("Search: " + req.query.name);
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
