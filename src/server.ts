import http from "http";
import dotenv from "dotenv";

dotenv.config();

import app from "./app";
import { initSocket } from "./socket";
import { connectRedis } from "./config/redis";

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  await connectRedis();

  await initSocket(server);

  server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
}

bootstrap();
