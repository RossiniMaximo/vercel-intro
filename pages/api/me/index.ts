import methods from "micro-method-router";
import { NextApiRequest, NextApiResponse } from "next";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    res.send("I'm the me's endpoint get method");
  },
  async patch(req: NextApiRequest, res: NextApiResponse) {
    res.send("I'm the me's endpoint patch method");
  },
});
