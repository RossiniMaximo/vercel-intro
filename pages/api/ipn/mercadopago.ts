import methods from "micro-method-router";
import { NextApiRequest, NextApiResponse } from "next";

export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    res.json("I'm the ipn/mercadopago's endpoint");
  },
});
