import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameformComponent } from './components/gameform/gameform.component';
import { GamelistComponent } from './components/gamelist/gamelist.component';

//importamos los servicios que y se señalará abajo en providers
import {GamesService} from './services/games.service'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameformComponent,
    GamelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //si no funciona reiniciar servidor
    FormsModule
  ],
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
