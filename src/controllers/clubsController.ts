import { Request, Response } from "express"
import { getClubService } from "../services/clubsServive"

export const getClubs = async (req: Request, res: Response)=>{
  const response = await getClubService();
  res.status(response.statusCode).json(response.body);
}