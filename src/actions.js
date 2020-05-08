export const SET_GAME = "SET_GAME";
export const SET_PLAYERS = "SET_PLAYERS";

export function setGame(id, bettingTable, players, matches) {
  return { type: SET_GAME, id, bettingTable, players, matches };
}

export function setPlayers(players) {
  return { type: SET_PLAYERS, players };
}
