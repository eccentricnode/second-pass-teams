import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Team } from '@second-pass/core-data';
import { TeamsAction, TeamsActionTypes } from './teams.actions';

export interface TeamsState extends EntityState<Team> {
  selectedTeamId: string | null;
}

export const adapter: EntityAdapter<Team> = createEntityAdapter<Team>();
export const initialState: TeamsState = adapter.getInitialState({
  selectedTeamId: null,
});

export function teamsReducer(state: TeamsState = initialState, action: TeamsAction): TeamsState {
  switch (action.type) {
    case TeamsActionTypes.TEAM_SELECTED: {
      return Object.assign({}, state, { selectedTeamId: action.payload });
    }

    case TeamsActionTypes.TEAMS_LOADED: {
      return adapter.upsertMany(action.payload, state);
    }

    default:
      return state;
  }
}

export const getSelectedTeamId = (state: TeamsState) => state.selectedTeamId;

// get the selectors...

export const {
  selectIds: selectedTeamIds,
  selectEntities: selectTeamEntities,
  selectAll: selectAllTeams,
  selectTotal: selectTeamTotal
} = adapter.getSelectors();