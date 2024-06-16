import * as PlayerRepository from "../repositories/playersRepository";
import { responseNoContent, responseOk } from "../utils/httpHelper";

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();
  let response = null;

  if(data) response = await responseOk(data);
  else response = await responseNoContent();

  return response;
}