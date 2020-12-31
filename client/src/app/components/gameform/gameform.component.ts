import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';

import {GamesService} from '../../services/games.service';

@Component({
  selector: 'app-gameform',
  templateUrl: './gameform.component.html',
  styleUrls: ['./gameform.component.css']
})
export class GameformComponent implements OnInit {
  //desde angularcore
  @HostBinding("class") classes = "row"; //añade la clase row al componente principal

  game: Game = {
    id:0,
    title:"",
    platform:"",
    image:"",
    created_at: new Date(),
    val:0,
    year:0
  };


  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
  }

  saveNewGame(){
    //console.log(this.game);
    this.gamesService.saveGame(this.game)
    .subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    )
  }
}