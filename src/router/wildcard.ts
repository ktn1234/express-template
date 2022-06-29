import { Router, Request, Response, NextFunction } from "express";
import boom from "@hapi/boom";

export default (router: Router): void => {
  router.all("*", (_: Request, __: Response, next: NextFunction) => {
    return next(boom.methodNotAllowed());
  });
};
