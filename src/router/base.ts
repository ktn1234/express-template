import { Router, Request, Response } from "express";

export default (router: Router): void => {
  router.get("/", (_: Request, res: Response) => {
    return res.status(200).send();
  });
};
