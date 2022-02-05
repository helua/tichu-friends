import { Component, OnInit } from '@angular/core';
import { BigGame } from '../models/game';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  bigGames: BigGame[] = [];
  constructor(private http: HttpService) { }

  ngOnInit(): void {

    this.http.getBigGames().subscribe(kupa =>{
      this.bigGames = kupa;
      console.log(this.bigGames);
    })

  }
  displayDuelSuccess(r: boolean){
    if(r === true){
      return '✔'
    }
  }
  // displayTichu(r: string){
  //   console.log(r);
  //   if(r === 'TICHUFAIL'){
  //     return 'T̶I̶C̶H̶U̶'
  //   }
  // }

}
