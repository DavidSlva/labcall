import { getResponseStatistics } from "@/backend/services/statistics.srv";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { course_id }: any = req.query;
    const items = await getResponseStatistics(course_id);
    res.status(200).json(items);
  }
}
