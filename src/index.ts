import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import chalk from "chalk";

import config from "./config";
import { logger, errorHandler } from "./middleware";
import router from "./router";

(async () => {
  const app = express();
  app.use(
    cors({
      credentials: true,
      origin: config.CORS_ORIGIN,
      optionsSuccessStatus: 200,
    })
  );
  app.use(express.json());
  app.use(cookieParser());
  app.use(logger());
  app.use(helmet());

  app.use(router());
  app.use(errorHandler);
  app.listen(config.PORT, () => {
    console.log(
      chalk.cyanBright(`⚡️Server running at http://localhost:${config.PORT}/`)
    );
  });
})();
