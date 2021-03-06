import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemsPage } from '../items/items';
import { HttpClient } from '@angular/common/http';
import { BuscarPage } from '../buscar/buscar';

/**
 * Generated class for the ComputadorasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-computadoras',
  templateUrl: 'computadoras.html',
})
export class ComputadorasPage {

  compus = [];
  itemsPage = ItemsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=5020&offset=1&lim=29&lang=es').
    subscribe(data => {
      console.log(JSON.stringify(data, null, 3));
      if (data.hasOwnProperty('list_ads')) {
        this.compus = data['list_ads'];
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
    this.navCtrl.push(this.search, {productos: this.compus});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComputadorasPage');
  }

}
