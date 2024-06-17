import { PlayerModel } from "../models/playerModel";
import { StatisticsModel } from "../models/statisticsModel";
import * as PlayerRepository from "../repositories/playersRepository";
import * as httpResponse from "../utils/httpHelper";

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();
  let response = null;
  if(data) response = await httpResponse.responseOk(data);
  else response = await httpResponse.responseNoContent();
  return response;
}

export const getPlayerIdService = async (id:number) =>{
  const data = await PlayerRepository.findPlayerById(id);
  let response = null;

  if(data) response = await httpResponse.responseOk(data);
  else response = await httpResponse.responseNoContent();
  return response;
}

export const createPlayerService = async (player:PlayerModel) => {
  
  const data: PlayerModel = player;
  let response = null;
  if(Object.keys(data).length !== 0 ){
    response = await httpResponse.responseCreated(data)
    await PlayerRepository.insertPlayer(player);
  }
  else response = httpResponse.responseBadRequest();

  return response;
}

export const deletePlayerService = async (id:number) =>{
  let response = null;
  let isDeleted = await PlayerRepository.findPlayerById(id)
  if(isDeleted){
    await PlayerRepository.deletePlayer(id);
    response = httpResponse.responseOk({message: "Deleted"});
  } else {
    response = await httpResponse.responseBadRequest();
    response.body = {error: "Id not found !!!"}
  }
  return response;
}

export const updatePlayerService = async (id:number, statistics: StatisticsModel) =>{
  const data = await PlayerRepository.findAndModifyPlayer(id,statistics);
  let response = null;
  if(data?.id !== undefined) response = await httpResponse.responseOk(data);
  else{
    response = await httpResponse.responseBadRequest();
    response.body = {error: "Id not found !!!"}
  }
   

  return response;
} 