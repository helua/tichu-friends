import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm, NgModel } from '@angular/forms';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpService } from '../services/http.service';
import { Player, PlayersInTeam} from '../models/game'


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class  PlayersComponent implements OnInit{
  @Input() team: number;

  model: PlayersInTeam = {
    playerA: { name: "Player A" },
    playerB: { name: "Player B" },
    team: null
  };
  @Output() newTeam = new EventEmitter<PlayersInTeam>();

  
  players: Player[];
      // {name: 'Helio'},
    // {name: 'Kostek'},
    // {name: 'Igor'},
    // {name: 'Ania'},
    // {name: 'Panczez'},
    // {name: 'Walc'},
    // {name: 'Mikele'}

  filteredPlayers: Player[] = [];
  currentName = '';
  
  
  constructor(private http: HttpService) { }

  ngOnInit(): void {
   
    this.players = this.http.getPlayers()
    // .subscribe(kupa =>{
    //   this.players = kupa;
    //   this.filteredPlayers = kupa;
    // })
    // console.log(this.players);
    this.model.team = this.team;

  }

  setPlayer(model: PlayersInTeam): void{
    console.log(this.model),
      this.newTeam.emit(model);
  }

  
  displayFn(user: Player): string {
    return user && user.name ? user.name : '';
  }

//   selectPlayer(player): void{
// console.log('elo',player);
// this.model.playerA = player.option.value;
// console.log(this.model.playerA);
//   }  

// doFilter(): void {
  //   console.log('doFilter')
  //  if(this.model.playerA.name == ''){
  //    this.filteredPlayers = this.players;
  //  }
  //  else{
  //    this.filteredPlayers = this.players.filter(player => player.name.toLowerCase().match(this.model.playerA.name.toLowerCase()))
  //  }
  //  console.log(this.filteredPlayers)
  // }


//   private _filter(players: Player[]): Player[] {
//     return players.filter(player => player.name.toLowerCase().includes(this.model.playerA.name))
//   }

  // printModel(title: NgModel){
  //   console.log(title)
  // }
}
