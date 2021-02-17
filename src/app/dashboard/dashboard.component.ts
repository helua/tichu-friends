import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { EmptyGame, Game, BigGame, EmptyBigGame, TichuType } from '../models/game';

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
  tPlayer1aChecked: boolean;
  c1: number;
  c2: number;
  game: Game;
  games: Game[] = [];
  @Input() bigGame: BigGame = EmptyBigGame;
  @Output() newGame = new EventEmitter<Game>();
  @Output() newBigGame = new EventEmitter<BigGame>();

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
    this.updateTotal;
    this.game = {
      cards1: 50,
      cards2: 50,
      tichu1: [],
      tichu2: [],
    
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
    
    this.tPlayer1aChecked = false;
  }

  updateTotal(): void{
    this.game.total1 = this.game.cards1 + this.game.tichu1.reduce((accum,item) => accum + item.score, 0) + this.game.duel1.score;
    this.game.total2 = this.game.cards2 + this.game.tichu2.reduce((accum,item) => accum + item.score, 0) + this.game.duel2.score;
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
        this.game.tichu1.push({tichu: TichuType.TICHU, score: 100});
      }
      else{        
        var a = this.game.tichu1
        var b = a.filter(type => type.tichu === TichuType.TICHU);
        b.splice(0,1);
        this.game.tichu1 = b;
      }
      console.log(this.game);    

    }
    if(t == 2){
      this.tichu2Checked = c;

      if(c == true){
        this.game.tichu2.push({tichu: TichuType.TICHU, score: 100});
      }
      else{
        var a = this.game.tichu2
        var b = a.filter(type => type.tichu === TichuType.TICHU);
        b.splice(0,1);
        this.game.tichu2 = b;
      }
      console.log(this.game);   

    }
    this.updateTotal();
  }

  updateTichuFail(t: number, $event){
    let c = $event.checked;

    if(t == 1){
      this.fail1Checked = c;
      if(c == true){
        this.game.tichu1.push({tichu: TichuType.TICHUFAIL, score: -100});
        console.log(this.game.tichu1.filter(t => t.tichu === TichuType.TICHUFAIL));
      }
      else{
        var a = this.game.tichu1
        var b = a.filter(type => type.tichu === TichuType.TICHUFAIL);
        // var b = a.filter(function (e) {
        //   return e.tichu === TichuType.TICHUFAIL;
        // });
        //przy dwóch playerach negative tichu jak się zachowa
        b.splice(0,2);
        this.game.tichu1 = b;   
           
      }
      console.log(this.game); 

    }
    if(t == 2){
      this.fail2Checked = c;

      if(c == true){
        this.game.tichu2.push({tichu: TichuType.TICHUFAIL, score: -100});
      }
      else{
        var a = this.game.tichu2
        var b = a.filter(type => type.tichu === TichuType.TICHUFAIL);
        b.splice(0,2);
        this.game.tichu2 = b;      
      }
      console.log(this.game); 

    }
    this.updateTotal();

  }

  updateGrande(t: number, $event){
    let c = $event.checked;

    if(t == 1){
      this.grande1Checked = c;

      if(c == true){
        this.game.tichu1.push({tichu: TichuType.GRANDE, score: 200});
      }
      else{
        var a = this.game.tichu1
        var b = a.filter(type => type.tichu === TichuType.GRANDE);
        b.splice(0,1);
        this.game.tichu1 = b;
      }
      console.log(this.game);     

    }
    if(t == 2){
      this.grande2Checked = c;

      if(c == true){
        this.game.tichu2.push({tichu: TichuType.GRANDE, score: 200});
      }
      else{
        var a = this.game.tichu2
        var b = a.filter(type => type.tichu === TichuType.GRANDE);
        b.splice(0,1);
        this.game.tichu2 = b;      }
      console.log(this.game);   

    }
    this.updateTotal();

  }

  updateGrandeFail(t: number, $event){
    let c = $event.checked;

    if(t == 1){
      this.gFail1Checked = c;

      if(c == true){
        this.game.tichu1.push({tichu: TichuType.GRANDEFAIL, score: -200});
      }
      else{
        var a = this.game.tichu1
        var b = a.filter(type => type.tichu === TichuType.GRANDEFAIL);
        b.splice(0,2);
        this.game.tichu1 = b;
      }
      console.log(this.game); 

    }
    if(t == 2){
      this.gFail2Checked = c;

      if(c == true){
        this.game.tichu2.push({tichu: TichuType.GRANDEFAIL, score: -200});
      }
      else{
        var a = this.game.tichu2
        var b = a.filter(type => type.tichu === TichuType.GRANDEFAIL);
        b.splice(0,2);
        this.game.tichu2 = b;
      }
      console.log(this.game); 

    }
    this.updateTotal();
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
