import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemsPage } from '../items/items';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
  productos = [];
  items = [];
  info = ItemsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productos = this.navParams.get('productos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }

  getItems(ev: any){
    this.items = this.productos.filter(producto => {
      return producto.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase())
    })
  }

  clickItems(item){
    this.navCtrl.push(this.info, {juego: item});
  }

}
