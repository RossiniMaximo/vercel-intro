import methods from "micro-method-router";
import { NextApiRequest, NextApiResponse } from "next";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    res.send("I'm the products/:id endpoint");
  },
});
