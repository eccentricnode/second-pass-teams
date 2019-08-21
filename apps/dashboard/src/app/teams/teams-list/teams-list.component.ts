import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Team } from '@second-pass/core-data';

@Component({
  selector: 'second-pass-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent {
  @Input() teams: Team;
  @Output() selected = new EventEmitter();

  select(team: Team) {
    this.selected.emit(team);
  }
}
