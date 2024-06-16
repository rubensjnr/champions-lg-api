import { PlayerModel } from "../models/playerModel";

const database:PlayerModel[] = [
  { id: 1, name: "Lionel Messi" },
  { id: 2, name: "Cristiano Ronaldo" },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> =>{
  return database;
}

export const findPlayerById = async (id:number): Promise<PlayerModel | undefined> =>{
  return database.find(player => player.id === id);
}