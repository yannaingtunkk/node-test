const http = require("http");
const app = require("express")();
const server = http.createServer(app);
const io = require("socket.io")(server);
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/home.html");
});
server.listen(process.env.PORT || 3000, "0.0.0.0", function() {
    console.log("Listening..");
});