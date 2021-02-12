import { Component, OnInit } from '@angular/core';
import { BIGGAME } from '../models/big-game'
import { BigGame } from '../models/game'
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  title: string;
  bigGame: BigGame = BIGGAME;
  constructor() { }

  ngOnInit(): void {
  }

}
