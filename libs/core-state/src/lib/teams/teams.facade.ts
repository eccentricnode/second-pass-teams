import { Injectable } from '@angular/core';

import { filter } from 'rxjs/operators';  
import { select, Store } from '@ngrx/store';

import { selectAllTeams, selectCurrentTeam } from './teams.selectors';
import { TeamsState } from './teams.reducer';
import * as TeamsActions from './teams.actions';

@Injectable()
export class TeamsFacade {
  allTeams$ = this.store.pipe(select(selectAllTeams));
  selectedTeam$ = this.store.pipe(select(selectCurrentTeam));

  constructor(private store: Store<TeamsState>) {}

  selectTeam(teamId: string) {
    this.store.dispatch(new TeamsActions.TeamSelected(teamId));
  }

  loadTeams() {
    this.store.dispatch(new TeamsActions.LoadTeams());
  }
}
