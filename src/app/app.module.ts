import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http'; //linea importante
import { ItemsPage } from '../pages/items/items';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { ComputadorasPage } from '../pages/computadoras/computadoras';
import { ReparacionesPage } from '../pages/reparaciones/reparaciones';
import { FavoritosProvider } from '../providers/favoritos/favoritos'; //ta shido
import { BuscarPage } from '../pages/buscar/buscar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ComputadorasPage,
    ReparacionesPage,
    ItemsPage,
    TabsPage,
    FavoritosPage,
    BuscarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule //linea importante
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ComputadorasPage,
    ReparacionesPage,
    ItemsPage,
    TabsPage,
    FavoritosPage,
    BuscarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
