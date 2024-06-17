import { findAllClubs } from "../repositories/clubRepository";
import * as httpResponse from "../utils/httpHelper";

export const getClubService = async () => {
  const data = await findAllClubs();

  const response = httpResponse.responseOk(data);
  return response;
}