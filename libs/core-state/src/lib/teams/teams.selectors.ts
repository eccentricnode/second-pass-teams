import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromTeams from './teams.reducer';
import { emptyTeam } from '@second-pass/core-data';

// Lookup the 'Teams' feature state managed by NgRx
export const selectTeamsState = createFeatureSelector<fromTeams.TeamsState>('teams');

export const selectTeamId = createSelector(
  selectTeamsState,
  fromTeams.selectedTeamIds
);

export const selectTeamEntities = createSelector(
  selectTeamsState,
  fromTeams.selectTeamEntities
);

export const selectAllTeams = createSelector(
  selectTeamsState,
  fromTeams.selectAllTeams
);

export const selectCurrentTeamId = createSelector(
  selectTeamsState,
  fromTeams.getSelectedTeamId
);

export const selectCurrentTeam = createSelector(
  selectTeamEntities,
  selectCurrentTeamId,
  (teamEntities, teamId) => {
    return teamId ? teamEntities[teamId] : Object.assign({}, emptyTeam);
  }
)