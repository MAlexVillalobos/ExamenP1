import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the ItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {

  juego = {};
  imgs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritosProvider ) { 
    this.juego = navParams.get('juego');
    //console.log(this.juego);

    if(this.juego.ad.hasOwnProperty('images')){
      this.imgs = this.juego.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CasaPage');
  }

  Favoritos(juego){
    this.fav.addFavoritos(juego)
  }

}

