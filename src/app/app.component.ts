import { Component } from '@angular/core';
import { BigGame, Game } from './models/game';
import { BIGGAME } from './models/big-game';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'tichu-friends';
  game: Game;
  bigGame: BigGame = BIGGAME;
  private url: "http://localhost:3000"

  constructor(private http: HttpClient) { }


  saveGame(game: Game){
    this.bigGame.games.unshift(game);
    console.log(this.bigGame);
    this.postFirstGame(this.bigGame);
  }

  postFirstGame(firstgame: BigGame){
    console.log('game posted');
    return this.http.post('http://localhost:3000/bigGames', firstgame)
      .pipe(tap(console.log)).subscribe(
        result => console.log(result),
        error => console.log(error)
      );
  }


  showBigGame(){
    console.log(this.bigGame);
  }
}