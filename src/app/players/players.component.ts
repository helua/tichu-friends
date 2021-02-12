import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Player {
  name: string;
}

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit{

  myControl = new FormControl();
  
  players: Player[] = [
    {name: 'Helio'},
    {name: 'Kostek'},
    {name: 'Igor'},
    {name: 'Ania'},
    {name: 'Panczez'},
    {name: 'Walc'},
    {name: 'Mikele'}
  ];

  filteredPlayers: Observable<Player[]>;
  

  constructor() { }

  ngOnInit(): void {
    this.filteredPlayers = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.players.slice())
      );
  }

  
  displayFn(user: Player): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): Player[] {
    const filterValue = name.toLowerCase();

    return this.players.filter(player => player.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
