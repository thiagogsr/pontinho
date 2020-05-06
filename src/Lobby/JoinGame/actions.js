import { joinGameRequest } from "./client";
import { setGame } from "../actions";
import { redirectTo } from "../../navigation";

export const CHANGE_JOIN_GAME_FORM = "CHANGE_JOIN_GAME_FORM";
export const RESET_JOIN_GAME_FORM = "RESET_JOIN_GAME_FORM";

export function changeJoinGameForm(event) {
  return {
    type: CHANGE_JOIN_GAME_FORM,
    field: event.target.name,
    value: event.target.value,
  };
}

export function resetJoinGameForm() {
  return { type: RESET_JOIN_GAME_FORM };
}

export function joinGame() {
  return (dispatch, getState) => {
    const { gameId, name } = getState().joinGameForm;

    joinGameRequest(gameId, name)
      .then((response) => {
        const {
          game_id: gameId,
          betting_table: bettingTable,
          player,
          players,
        } = response.data;

        dispatch({ type: RESET_JOIN_GAME_FORM });
        dispatch(setGame(gameId, bettingTable, players));
        dispatch(redirectTo(`/${gameId}/${player.id}`));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
