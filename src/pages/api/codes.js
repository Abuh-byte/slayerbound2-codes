import type { NextApiRequest, NextApiResponse } from "next";
import { getCodes } from "@/lib/codes";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = getCodes();
  res.status(200).json(data);
}
