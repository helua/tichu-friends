import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { EmptyGame, Game, BigGame, EmptyBigGame } from '../models/game';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tichu1Checked: boolean;
  tichu2Checked: boolean;
  fail1Checked: boolean;  
  fail2Checked: boolean;
  grande1Checked: boolean;
  grande2Checked: boolean;
  gFail1Checked: boolean;
  gFail2Checked: boolean;
  duel1Checked: boolean;
  duel2Checked: boolean;
  c1: number;
  c2: number;
  game: Game;
  games: Game[] = [];
  bigGame: BigGame = EmptyBigGame;
  @Output() newGame = new EventEmitter<Game>();
  @Output() newBigGame = new EventEmitter<BigGame>();

  // lastGame =  new Subject<Game>();

  // constructor(public scoreService: ScoreService) {

  // }

  
  

  ngOnInit(): void {

    this.game = EmptyGame;
    console.log('Start: ', this.game );

  }
  
  showGame(): void{
    console.log(this.game)
  }

  sendGame(game: Game){
    this.games.push(game);
    this.newGame.emit(game);
    this.game = {
      cards1: 50,
      cards2: 50,
      tichu1: {
          player1: {
              success: undefined,
              grande: undefined,
              score: 0,
          },
          player2: {
              success: undefined,
              grande: undefined,
              score: 0,
          }
          },
      tichu2: {
          player1: {
              success: undefined,
              grande: undefined,
              score: 0,
          },
          player2: {
              success: undefined,
              grande: undefined,
              score: 0,
          }
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
    }
    this.clearSheet();
  }

  sendBigGame(games: Game[]){
    
    this.bigGame = {
      games: games
    }
    console.log(this.bigGame);  
    this.newBigGame.emit(this.bigGame);
    this.games = [];
    this.bigGame = EmptyBigGame;
    this.clearSheet();
  }


  clearSheet(){
    this.tichu1Checked = false;
    this.tichu2Checked = false;
    this.fail1Checked = false;  
    this.fail2Checked = false;
    this.grande1Checked = false;
    this.grande2Checked = false;
    this.gFail1Checked = false;
    this.gFail2Checked = false;
    this.duel1Checked = false;
    this.duel2Checked = false; 
  }

  updateTotal(): void{
    this.game.total1 = this.game.cards1 + this.game.tichu1.player1.score + this.game.duel1.score;
    this.game.total2 = this.game.cards2 + this.game.tichu2.player1.score + this.game.duel2.score;
  }
  

  scoreSet(value: number){
      this.game.cards1 = value;
      this.game.cards2 = 100 - value;
      this.updateTotal();
      // this.scoreService.scoreSheet.next(this.game);
  }

  duelCards(): void{
    this.c1 = this.game.cards1;
    this.c2 = this.game.cards2;
    this.game.cards1 = 0;
    this.game.cards2 = 0;

  }
  duelBack(): void{
    this.game.cards1 = this.c1;
    this.game.cards2 = this.c2;
  }

  updateTichu(t: number, $event){
    let c = $event.checked;

    if(t == 1){
      this.tichu1Checked = c;

      if(c == true){
        this.game.tichu1.player1.success = c;
        this.game.tichu1.player1.score += 100;


      }
      else{
        this.game.tichu1.player1.success = undefined;
        this.game.tichu1.player1.score -= 100;

      }
      console.log(this.game);    

    }
    if(t == 2){
      this.tichu2Checked = c;

      if(c == true){

        this.game.tichu2.player1.success = c;
        this.game.tichu2.player1.score += 100;

      }
      else{
        this.game.tichu2.player1.success = undefined;
        this.game.tichu2.player1.score -= 100;

      }
      console.log(this.game);    

    }
    this.updateTotal();
// //     this.scoreService.scoreSheet.next(this.game);


  }

  updateTichuFail(t: number, $event){
    let c = $event.checked;

    if(t == 1){
      this.fail1Checked = c;
      if(c == true){
        this.game.tichu1.player1.success = !c;
        this.game.tichu1.player1.score -= 100;
      }
      else{
        this.game.tichu1.player1.success = undefined;
        this.game.tichu1.player1.score += 100;
      }
      console.log(this.game);    

    }
    if(t == 2){
      this.fail2Checked = c;

      if(c == true){

        this.game.tichu2.player1.success = !c;
        this.game.tichu2.player1.score -= 100;
      }
      else{
        this.game.tichu2.player1.success = undefined;
        this.game.tichu2.player1.score += 100;
      }
      console.log(this.game);    

    }
    this.updateTotal();
// //     this.scoreService.scoreSheet.next(this.game);

  }

  updateGrande(t: number, $event){
    let c = $event.checked;

    if(t == 1){
      this.grande1Checked = c;

      if(c == true){
        this.game.tichu1.player1.success = c;
        this.game.tichu1.player1.grande = c;
        this.game.tichu1.player1.score += 200;
      }
      else{
        this.game.tichu1.player1.grande = undefined;
        this.game.tichu1.player1.score -= 200;
      }
      console.log(this.game);    

    }
    if(t == 2){
      this.grande2Checked = c;

      if(c == true){
        this.game.tichu2.player1.success = c;
        this.game.tichu2.player1.grande = c;
        this.game.tichu2.player1.score += 200;
      }
      else{
        this.game.tichu2.player1.grande = undefined;
        this.game.tichu2.player1.score -= 200;
      }
      console.log(this.game);    

    }
    this.updateTotal();
// //     this.scoreService.scoreSheet.next(this.game);


  }

  updateGrandeFail(t: number, $event){
    let c = $event.checked;

    if(t == 1){
      this.gFail1Checked = c;

      if(c == true){
        this.game.tichu1.player1.success = !c;
        this.game.tichu1.player1.grande = !c;
        this.game.tichu1.player1.score -= 200;
      }
      else{
        this.game.tichu1.player1.success = undefined;
        this.game.tichu1.player1.grande = undefined;
        this.game.tichu1.player1.score += 200;
      }
      console.log(this.game);    

    }
    if(t == 2){
      this.gFail2Checked = c;

      if(c == true){
        this.game.tichu2.player1.success = !c;
        this.game.tichu2.player1.grande = !c;
        this.game.tichu2.player1.score -= 200;
      }
      else{
        this.game.tichu2.player1.success = undefined;
        this.game.tichu2.player1.grande = undefined;
        this.game.tichu2.player1.score += 200;
      }

    }
    this.updateTotal();
// //     this.scoreService.scoreSheet.next(this.game);

  }

  updateDuel(t: number, $event){
    let c = $event.checked;

    if(t == 1){
      this.duel1Checked = c;

      if(c == true){
        this.game.duel1.success = c;
        this.game.duel1.score += 200;
        this.duelCards();

      }
      else{
        this.game.duel1.success = undefined;
        this.game.duel1.score -= 200;
        this.duelBack();
      }
      console.log(this.game);    

    }
    if(t == 2){
      this.duel2Checked = c;

      if(c == true){
        this.game.duel2.success = c;
        this.game.duel2.score += 200;
        this.duelCards();

      }
      else{
        this.game.duel2.success = undefined;
        this.game.duel2.score -= 200;
        this.duelBack();

      }
      console.log(this.game);    

    }

    this.updateTotal();
// //     this.scoreService.scoreSheet.next(this.game);

  }


  
}
