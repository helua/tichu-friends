import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Game, Tichu, Duel, EmptyGame } from '../models/game';


@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  
  // tichu1: Tichu = {
  //   success: undefined,
  //   grande: undefined,
  //   score: 0
  // };
  // tichu2: Tichu = {
  //   success: undefined,
  //   grande: undefined,
  //   score: 0
  // };
  // duel1: Duel = {
  //   success: undefined,
  //   score: 0
  // };
  // duel2: Duel = {
  //   success: undefined,
  //   score: 0
  // };





  // game: Game = {
  //   cards1: 50,
  //   cards2: 50,
  //   tichu1: this.tichu1,
  //   tichu2: this.tichu2,
  //   duel1: this.duel1,
  //   duel2: this.duel2,
  //   total1: 50,
  //   total2: 50
  // };

  game: Game = EmptyGame;



  scoreSheet = new BehaviorSubject<Game>(this.game);


  sendScore(){

    this.game = {
      cards1: 50,
    cards2: 50,
    tichu1: {
            success: undefined,
            grande: undefined,
            score: 0,
          },
    tichu2: {
        success: undefined,
        grande: undefined,
        score: 0
      },
    duel1:  {
        success: undefined,
        score: 0
    },
    duel2:  {
        success: undefined,
        score: 0
    },
    total1: 50,
    total2: 50
    };
    console.log(this.game);
  }
  
  
  

  
}
