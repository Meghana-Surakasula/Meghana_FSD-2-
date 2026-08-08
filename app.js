//importing express
const express=require('express');
//initializing app
const app=express();
//setting port
const PORT=3000;
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});
app.get("/about", (req, res) => {
  res.send("This is the About page.");
});
// Route parameter
app.get("/users/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// Multiple route parameters
app.get("/users/:userId/posts/:postId", (req, res) => {
  res.json({
    userId: req.params.userId,
    postId: req.params.postId
  });
});

// Query parameters
app.get("/search", (req, res) => {
  res.json({
    name: req.query.name,
    age: req.query.age
  });
});

app.listen(PORT, () => {
  console.log(`Dynamic Server running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server');
});
