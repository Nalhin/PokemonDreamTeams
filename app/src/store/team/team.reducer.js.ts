import produce from 'immer';

import { Reducer } from 'redux';
import { Team } from '../../interfaces/team';
import { TeamActions, TeamActionTypes } from './team.types';

export interface TeamState {
  readonly teams: { data: Team[]; isLoading: boolean };
}

const INITIAL_STATE: TeamState = {
  teams: { data: [], isLoading: false },
};

const pokemonReducer: Reducer<TeamState, TeamActions> = (
  state = INITIAL_STATE,
  action,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case TeamActionTypes.GET_TEAMS_REQUESTED:
        draft.teams.isLoading = true;
        break;
      case TeamActionTypes.GET_TEAMS_SUCCEEDED:
        draft.teams.data = action.data;
        draft.teams.isLoading = false;
        break;
      case TeamActionTypes.GET_TEAMS_FAILED:
        draft.teams.isLoading = false;
        break;
      case TeamActionTypes.GET_TEAM_BY_ID_REQUESTED:
        break;
      case TeamActionTypes.GET_TEAM_BY_ID_SUCCEEDED:
        break;
      case TeamActionTypes.GET_TEAM_BY_ID_FAILED:
        break;
      case TeamActionTypes.SAVE_TEAM_REQUESTED:
        break;
      case TeamActionTypes.SAVE_TEAM_SUCCEEDED:
        break;
      case TeamActionTypes.SAVE_TEAM_FAILED:
        break;
      case TeamActionTypes.DELETE_TEAM_REQUESTED:
        break;
      case TeamActionTypes.DELETE_TEAM_SUCCEEDED:
        break;
      case TeamActionTypes.DELETE_TEAM_FAILED:
        break;
      default:
        break;
    }
  });
};

export default pokemonReducer;
