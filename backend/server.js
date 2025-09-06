const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.send("Snappy Chat Backend is running...");
});

io.on("connection", (socket) => {
  console.log("A user connected");
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
