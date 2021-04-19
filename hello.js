const http = require("http");
const app = require("express")();
const server = http.createServer(app);
const io = require("socket.io")(server);
io.on("connection", (socket) => {
    console.log("User connected");
    socket.on("disconnect", () => {
        console.log("Disconnected");
    });
    socket.on("chat", (msg) => {
        console.log("Message " + msg);
    });
});
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/home.html");
});
server.listen(process.env.PORT, "127.0.0.1", function() {
    console.log("Listening..");
});