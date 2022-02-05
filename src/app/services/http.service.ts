import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { BigGame, Game, Player } from '../models/game';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}


  getPlayers() : Observable<Player[]> {
    return this.httpClient.get<Player[]>('http://localhost:3000/players');

    // [{name: "Ania"},
    // {name: "Helio"},
    // {name: "Kostek"},
    // {name: "Igor"},
    // {name: "Panczez"},
    // {name: "Walc"},
    // {name: "Mikele"}]
  }
  getBigGames() : Observable<BigGame[]> {
    return this.httpClient.get<BigGame[]>('http://localhost:3000/bigGames');

  }

}
