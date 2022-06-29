import moment from "moment";
import express, { Handler } from "express";
import morgan from "morgan";
import chalk from "chalk";

export function logger(): Handler {
  morgan.token("date-time", function () {
    return moment().utc().toISOString();
  });

  morgan.token(
    "response-length",
    function (_: express.Request, res: express.Response) {
      return res.get("content-length");
    }
  );

  const logger = morgan(
    chalk.yellow(
      "[:date[iso]] | remote-addr: :remote-addr | method: :method | http-version: :http-version | url: :url | status: :status | response-length: :response-length B | response-time: :response-time ms"
    )
  );

  return logger;
}
