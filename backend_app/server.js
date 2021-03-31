const express = require("express");
const http = require("http")
const cors = require("cors")
require("dotenv").config();
const port = process.env.PORT;
const app = express();
const server = http.createServer(app);
const Routes = require("./backend_app/routes");
app.use([cors(),Routes])
const io = (module.exports.io = require("socket.io")(server));
const socketManager = require("./backend_app/socketManager");
io.on("connection", socketManager);

server.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})