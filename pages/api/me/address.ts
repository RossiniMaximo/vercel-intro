import methods from "micro-method-router";
import { NextApiRequest, NextApiResponse } from "next";

export default methods({
  async patch(req: NextApiRequest, res: NextApiResponse) {
    res.send("I'm the me/adress endpoint patch method");
  },
});
