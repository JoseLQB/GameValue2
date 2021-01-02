import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { ActivatedRoute, Route, Router} from '@angular/router'

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

  edit:boolean = false;


  constructor(private gamesService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //validación para editar 
    const params = this.activatedRoute.snapshot.params;//
    console.log(params);
    if(params.id){
      this.gamesService.getGame(params.id)
      .subscribe(
        res=>{
          console.log(res);
          this.game=res;
          this.edit=true;
        },
        err=>console.log(err)
      )
    }
  }

  saveNewGame(){
    //console.log(this.game);

    delete this.game.created_at;
    delete this.game.id;

    this.gamesService.saveGame(this.game)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/games']);//Lleva a la página games con la lista de juegos
      },
      err=>console.log(err)
    )
  }

  updateGame(){
    delete this.game.created_at;
    this.gamesService.updateGame(this.game.id, this.game)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/games']);
      },
      err=>console.log(err)
    )
  }

}