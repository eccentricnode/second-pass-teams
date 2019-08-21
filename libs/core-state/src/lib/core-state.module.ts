import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTeams from './teams/teams.reducer';
import { TeamsEffects } from './teams/teams.effects';
import { TeamsFacade } from './teams/teams.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTeams.TEAMS_FEATURE_KEY, fromTeams.reducer),
    EffectsModule.forFeature([TeamsEffects])
  ],
  providers: [TeamsFacade]
})
export class CoreStateModule {}
