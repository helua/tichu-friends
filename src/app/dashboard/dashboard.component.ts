import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmptyGame, Game } from '../models/game';
import { ScoreService } from '../services/score.service';

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
  @Output() newGame = new EventEmitter<Game>();
  @Output() showGame = new EventEmitter<any>();

  constructor(public scoreService: ScoreService) {

  }

  


  ngOnInit(): void {

    this.scoreService.scoreSheet.subscribe(
      (data) => {
        this.game = data;
      },
      (err) => {
        console.log('Received error:', err);
      },
      () => {
        console.log('Completed');
      }
    );
    console.log('Start: ', this.game );

  }
  showBigGame(): void{
    this.showGame.emit();
  }
  sendScore(game: Game){

    this.newGame.emit(game);
    // this.scoreService.scoreSheet.unsubscribe();
    // this.scoreService.scoreSheet.subscribe(
    //   (data) => {
    //     this.game = data;
    //   },
    //   (err) => {
    //     console.log('Received error:', err);
    //   },
    //   () => {
    //     console.log('Completed');
    //   }
    // );
    // console.log('New Start: ', this.game );

    console.log(this.scoreService.scoreSheet);
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
    // this.scoreService.scoreSheet.unsubscribe();
  }

  updateTotal(): void{
    this.game.total1 = this.game.cards1 + this.game.tichu1.score + this.game.duel1.score;
    this.game.total2 = this.game.cards2 + this.game.tichu2.score + this.game.duel2.score;
  }
  

  scoreSet(value: number){
      this.game.cards1 = value;
      this.game.cards2 = 100 - value;
      this.updateTotal();
      this.scoreService.scoreSheet.next(this.game);
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
        this.game.tichu1.success = c;
        this.game.tichu1.score += 100;

      }
      else{
        this.game.tichu1.success = undefined;
        this.game.tichu1.score -= 100;

      }
      console.log(this.game);    

    }
    if(t == 2){
      this.tichu2Checked = c;

      if(c == true){

        this.game.tichu2.success = c;
        this.game.tichu2.score += 100;

      }
      else{
        this.game.tichu2.success = undefined;
        this.game.tichu2.score -= 100;

      }
      console.log(this.game);    

    }
    this.updateTotal();
    this.scoreService.scoreSheet.next(this.game);


  }

  updateTichuFail(t: number, $event){
    let c = $event.checked;

    if(t == 1){
      this.fail1Checked = c;
      if(c == true){
        this.game.tichu1.success = !c;
        this.game.tichu1.score -= 100;
      }
      else{
        this.game.tichu1.success = undefined;
        this.game.tichu1.score += 100;
      }
      console.log(this.game);    

    }
    if(t == 2){
      this.fail2Checked = c;

      if(c == true){

        this.game.tichu2.success = !c;
        this.game.tichu2.score -= 100;
      }
      else{
        this.game.tichu2.success = undefined;
        this.game.tichu2.score += 100;
      }
      console.log(this.game);    

    }
    this.updateTotal();
    this.scoreService.scoreSheet.next(this.game);

  }

  updateGrande(t: number, $event){
    let c = $event.checked;

    if(t == 1){
      this.grande1Checked = c;

      if(c == true){
        this.game.tichu1.success = c;
        this.game.tichu1.grande = c;
        this.game.tichu1.score += 200;
      }
      else{
        this.game.tichu1.grande = undefined;
        this.game.tichu1.score -= 200;
      }
      console.log(this.game);    

    }
    if(t == 2){
      this.grande2Checked = c;

      if(c == true){
        this.game.tichu2.success = c;
        this.game.tichu2.grande = c;
        this.game.tichu2.score += 200;
      }
      else{
        this.game.tichu2.grande = undefined;
        this.game.tichu2.score -= 200;
      }
      console.log(this.game);    

    }
    this.updateTotal();
    this.scoreService.scoreSheet.next(this.game);


  }

  updateGrandeFail(t: number, $event){
    let c = $event.checked;

    if(t == 1){
      this.gFail1Checked = c;

      if(c == true){
        this.game.tichu1.success = !c;
        this.game.tichu1.grande = !c;
        this.game.tichu1.score -= 200;
      }
      else{
        this.game.tichu1.success = undefined;
        this.game.tichu1.grande = undefined;
        this.game.tichu1.score += 200;
      }
      console.log(this.game);    

    }
    if(t == 2){
      this.gFail2Checked = c;

      if(c == true){
        this.game.tichu2.success = !c;
        this.game.tichu2.grande = !c;
        this.game.tichu2.score -= 200;
      }
      else{
        this.game.tichu2.success = undefined;
        this.game.tichu2.grande = undefined;
        this.game.tichu2.score += 200;
      }

    }
    this.updateTotal();
    this.scoreService.scoreSheet.next(this.game);

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
    this.scoreService.scoreSheet.next(this.game);

  }


  
}
