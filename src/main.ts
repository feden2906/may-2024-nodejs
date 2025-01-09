// import { rateLimit } from "express-rate-limit";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import expressFileUpload from "express-fileupload";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "../docs/swagger.json";
import { config } from "./configs/config";
import { cronRunner } from "./crons";
import { ApiError } from "./errors/api-error";
import { authRouter } from "./routers/auth.router";
import { userRouter } from "./routers/user.router";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    preflightContinue: false,
    optionsSuccessStatus: 200,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressFileUpload());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.use(rateLimit({ windowMs: 30 * 1000, limit: 10 }));
app.use("/auth", authRouter);
app.use("/users", userRouter);

app.use(
  "*",
  (error: ApiError, req: Request, res: Response, next: NextFunction) => {
    const status = error.status || 500;
    const message = error.message ?? "Something went wrong";

    res.status(status).json({ status, message });
  },
);
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});

app.listen(config.port, async () => {
  await mongoose.connect(config.mongoUri);
  console.log(`Server has been started on port ${config.port}`);
  await cronRunner();
});
