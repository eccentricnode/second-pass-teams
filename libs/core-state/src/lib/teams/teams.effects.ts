import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { TeamsState } from './teams.reducer';
import {
  TeamsActionTypes,
  LoadTeams,
  TeamsLoaded
} from './teams.actions';
import { TeamsService, Team } from '@second-pass/core-data';

@Injectable()
export class TeamsEffects {
  @Effect() loadTeams$ = this.dataPersistence.fetch(TeamsActionTypes.LOAD_TEAMS, {
    run: (action: LoadTeams, state: TeamsState) => {
      return this.teamsService.all().pipe(map((res: Team[]) => new TeamsLoaded(res)));
    },

    onError: (action: LoadTeams, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private teamsService: TeamsService,
    private dataPersistence: DataPersistence<TeamsState>
  ) {}
}
