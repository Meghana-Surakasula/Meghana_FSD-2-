import express from "express";

const app = express();
const PORT = 3000;

// Route parameter
app.get("/users/:id", (req, res) => {
    res.send("User ID: " + req.params.id);
});

// Multiple route parameters
app.get("/users/:userId/posts/:postId", (req, res) => {
    res.send(
        "User ID: " + req.params.userId +
        ", Post ID: " + req.params.postId
    );
});

// Query parameter
app.get("/search", (req, res) => {
    res.send("Search: " + req.query.name);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});