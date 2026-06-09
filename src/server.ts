import http from "http";
import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { initSocket } from "./socket";

const server = http.createServer(app);

initSocket(server);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
