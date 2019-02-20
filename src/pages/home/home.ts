import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ItemsPage } from '../items/items';
import { BuscarPage } from '../buscar/buscar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  juegos = [];
  itemsPage = ItemsPage;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es').
    subscribe(data => {
      //console.log(JSON.stringify(data, null, 3));
      if (data.hasOwnProperty('list_ads')) {
        this.juegos = data['list_ads'];
      }
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

  clickItems(juego){
    this.navCtrl.push(this.itemsPage, {juego: juego});
  }

  search = BuscarPage;
  clickBuscar(){
    this.navCtrl.push(this.search, {productos: this.juegos});
  }

}
