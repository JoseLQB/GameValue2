import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //para peticiones http
//importamos la interface
import{Game} from '../models/Game'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  API_URI ='http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  //devuelve todos los juegos
  getGames(){
    //trae los tados del servidor
    return this.http.get(`${this.API_URI}/games`);
  }
  //devuelve solo un juego
  getGame(id:string){
    return this.http.get(`${this.API_URI}/games/${id}`);
  }
  //eliminar juego
  deleteGame(id:string){
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }
  //alamcenar juego
  saveGame(game:Game){
    return this.http.post(`${this.API_URI}/games`, game)
  }
  //actualizar juego
  updateGame(id:string|number|undefined, updatedGame:Game): Observable<Game> {
    return this.http.put(`${this.API_URI}/games/${id}`, updatedGame)
  }
}
