import { Component, HostBinding, OnInit } from '@angular/core';
//importamos los servicios
import {GamesService  } from '../../services/games.service'

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {

  @HostBinding('class') classes = "row";
  games: any = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(){
    this.gamesService.getGames().subscribe(
      res=>{
        this.games = res;
      },
      err=>console.log(err)
    )

  }

  deleteGame(id:string, title:string){
    console.log("");
    var validar = confirm("¿Eliminar " + title + "?");
    if(validar == true){
      this.gamesService.deleteGame(id).subscribe(
        res=>{
          console.log(res);
          this.getGames();
        },
        err=>console.log(err)
      );
    }
  }

  /*editGame(id:string){
    console.log("juego editado" + id)
  }*/

}
