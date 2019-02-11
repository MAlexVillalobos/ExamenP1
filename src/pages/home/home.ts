import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  juegos = [];

  constructor(public navCtrl: NavController, public http: HttpClient) {
    //todo esto es importante... copia todo el constructor alv
    this.http.get('/v1/klfst?&category=2020&region=16&lim=29&lang=es').
    subscribe(data => {
      //console.log(JSON.stringify(data, null, 3));
      if (data.hasOwnProperty('list_ads')) {
        this.juegos = data['list_ads'];
      }
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

}
