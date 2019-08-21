import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Team } from './team.model';

const BASE_URL = `https://level-up-api-varwfvewcd.now.sh`;

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  model = `teams`;

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  all() {
    return this.http.get<any>(this.getUrl())
      .pipe(map((res: any) => res.map((team: Team, i) => this.CreateNewIds(team, i))));
  }

  private CreateNewIds(data: Team, i) {
    i++;
    return { id: i, ...data };
  }
}
