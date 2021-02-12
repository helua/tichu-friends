import { Component, OnInit } from '@angular/core';
import { BigGame, Game } from './models/game';
import { BIGGAME } from './models/big-game';
import { ScoreService } from './services/score.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'tichu-friends';
  game: Game;
  bigGame: BigGame = BIGGAME;
  closedGame: Game;

  saveGame(game: Game){
    this.bigGame.games.unshift(game);
    console.log(this.bigGame);
  }
  showBigGame(){
    console.log(this.bigGame);
  }
}