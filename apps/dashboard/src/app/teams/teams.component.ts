import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

import { Team } from '@second-pass/core-data';
import { TeamsFacade } from '@second-pass/core-state';

@Component({
  selector: 'second-pass-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  form: FormGroup;
  teams$: Observable<Team[]> = this.teamsFacade.allTeams$;
  selectedTeam$: Observable<Team> = this.teamsFacade.selectedTeam$;

  constructor(
    private teamsFacade: TeamsFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  selectTeam(team) {
    this.teamsFacade.selectTeam(team.id);
  }

  reset() {
    this.form.reset();
    this.selectTeam({name: ''});
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: '',
      name: { value: '', disabled: true }, 
    });
  }
}
