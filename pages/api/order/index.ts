import methods from "micro-method-router";
import { NextApiRequest, NextApiResponse } from "next";

export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    res.send("I'm the order's post method");
  },
});
