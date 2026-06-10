import http from "http";
import dotenv from "dotenv";

dotenv.config();

import app from "./app";
import { initSocket } from "./socket";
import { connectRedis } from "./config/redis";

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  try {
    // console.log("Connecting Redis...");
    // await connectRedis();
    // console.log("Redis connected");

    console.log("Initializing Socket...");
    await initSocket(server);
    console.log("Socket initialized");

    server.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.error("BOOTSTRAP ERROR:");
    console.error(error);
  }
}

bootstrap();
