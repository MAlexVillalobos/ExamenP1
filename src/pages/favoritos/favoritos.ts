import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';
import { ItemsPage } from '../items/items';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  items=[];
  itemsPage = ItemsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav:FavoritosProvider) {
    this.items = this.fav.getFavoritos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

  clickItems(item){
    this.navCtrl.push(this.itemsPage, {juego: item});
  }

}
