import { Component } from '@angular/core';
import { BigGame, EmptyGame, Game, Player, PlayersInTeam, EmptyBigGame } from './models/game';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { HttpService } from './services/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'tichu-friends';
  game: Game = EmptyGame;
  games: Game[] = [];
  bigGame: BigGame = EmptyBigGame;
  playersActive: Player[] = [];
  gameDate = new Date();
  

  // exportBigGame = new BehaviorSubject<Game[]>(this.bigGame);

  private url: "http://localhost:3000/games"

  constructor(private http: HttpClient) { }
  
  // assignDate(event: KeyboardEvent){
  //   console.log(event);
  //   // let date = event;
  //   // this.bigGame.date = date;
  // }

  onNewGame(game: Game){
    this.game = game;
    this.game.player1a = this.bigGame.player1a;
    this.game.player1b = this.bigGame.player1b;
    this.game.player2a = this.bigGame.player2a;
    this.game.player2b = this.bigGame.player2b;


    this.games.push(game);
    return this.http.post('http://localhost:3000/games', game)
      .pipe(tap(console.log)).subscribe(
        result => console.log(result),
        error => console.log(error)
      );
  }
  onNewBigGame(bigGame: BigGame){
    this.bigGame = bigGame;
    this.bigGame.player1a = this.game.player1a;
    this.bigGame.player1b = this.game.player1b;
    this.bigGame.player2a = this.game.player2a;
    this.bigGame.player2b = this.game.player2b;
    this.bigGame.total1 = this.bigGameTotal(1);
    this.bigGame.total2 = this.bigGameTotal(2);


      var d = this.gameDate.valueOf();
      var epoche = (d / 1000);
      var gameDateFormatted = new Date((epoche + 3600) * 1000)
    this.bigGame.date = gameDateFormatted;

    this.games = [];
    return this.http.post('http://localhost:3000/bigGames', bigGame)
      .pipe(tap(console.log)).subscribe(
        result => console.log(result),
        error => console.log(error)
      );
  }
  
  bigGameTotal(t: number){
    if( t == 1 ){
      var totalPoints = this.games.reduce((accum,item) => accum + item.total1, 0)
    }
    if ( t == 2 ){
      var totalPoints = this.games.reduce((accum,item) => accum + item.total2, 0)
    }
    return totalPoints;
  }



  onNewTeam(model: PlayersInTeam){
    if(model.team == 1){
      this.game.player1a = model.playerA;
      this.game.player1b = model.playerB;
      this.bigGame.player1a = model.playerA;
      this.bigGame.player1b = model.playerB;
      console.log(this.game)

    }
    if(model.team == 2){
      this.game.player2a = model.playerA;
      this.game.player2b = model.playerB;
      this.bigGame.player2a = model.playerA;
      this.bigGame.player2b = model.playerB;
      console.log(this.game)

    }

  }



}