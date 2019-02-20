import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemsPage } from '../items/items';
import { HttpClient } from '@angular/common/http';
import { BuscarPage } from '../buscar/buscar';

/**
 * Generated class for the ReparacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reparaciones',
  templateUrl: 'reparaciones.html',
})
export class ReparacionesPage {

  reparaciones = [];
  itemsPage = ItemsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=8020&offset=1&lim=29&lang=es').
    subscribe(data => {
      //console.log(JSON.stringify(data, null, 3));
      if (data.hasOwnProperty('list_ads')) {
        this.reparaciones = data['list_ads'];
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
    this.navCtrl.push(this.search, {productos: this.reparaciones});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReparacionesPage');
  }

}
