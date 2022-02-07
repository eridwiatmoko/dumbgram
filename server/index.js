require("dotenv").config();
const router = require("./src/routes");
const express = require("express");
const cors = require("cors");

const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // define client origin if both client and server have different origin
  },
});
require("./src/socket")(io);

const PORT = 3030;

app.use(express.json());
app.use(cors());

app.use("/api/v1/", router);
app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
