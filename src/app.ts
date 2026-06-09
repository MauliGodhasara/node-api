import express from "express";

import routes from "./routes";
import { corsConfig } from "./config";
import { errorMiddleware, notFoundMiddleware } from "./middlewares";

const app = express();

app.use(corsConfig);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;
