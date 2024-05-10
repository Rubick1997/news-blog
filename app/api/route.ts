import { NextApiRequest, NextApiResponse } from "next";

export function GET(req: NextApiRequest, res: NextApiResponse) {
  return new Response("Hello GET from the API!");
}

export function POST(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    data: {
      message: "Hello POST from the API!",
    },
  });
}
