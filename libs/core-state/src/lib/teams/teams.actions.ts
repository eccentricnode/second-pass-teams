import { Action } from '@ngrx/store';
import { Team } from '@second-pass/core-data';

export enum TeamsActionTypes {
  TEAMS_ACTION  = '[TEAMS] Teams Action',
  TEAM_SELECTED = '[TEAMS] Team Selected',
  LOAD_TEAMS    = '[TEAMS] Load Teams',
  TEAMS_LOADED  = '[TEAMS] Teams Loaded'
}

export class Teams implements Action {
  readonly type = TeamsActionTypes.TEAMS_ACTION;
}

export class TeamSelected implements Action { 
  readonly type = TeamsActionTypes.TEAM_SELECTED;
  constructor(public payload) { }
}

export class LoadTeams implements Action {
  readonly type = TeamsActionTypes.LOAD_TEAMS;
  constructor() { }
}

export class TeamsLoaded implements Action {
  readonly type = TeamsActionTypes.TEAMS_LOADED;
  constructor(public payload: Team[]) { }
}

export type TeamsAction = Teams
  | TeamSelected
  | LoadTeams
  | TeamsLoaded
;
