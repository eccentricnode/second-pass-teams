import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Team } from '@second-pass/core-data';

@Component({
  selector: 'second-pass-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent {
  @Input() group: FormGroup;
  @Input() set team(value: Team) {
    if(!value) return;
    this.group.patchValue({
      id: value.id,
      name: value.name
    });
  }

  @Output() resetForm = new EventEmitter();

  reset() {
    this.resetForm.emit();
  }
}
