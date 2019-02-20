import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FavoritosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritosProvider {

  fav = [];

  constructor(public http: HttpClient) {
    console.log('Hello FavoritosProvider Provider');
  }

  addFavoritos(juego){
    this.fav.push(juego);
  }

  getFavoritos(){
    return this.fav;
  }

}
