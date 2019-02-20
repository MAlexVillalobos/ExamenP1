import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComputadorasPage } from './computadoras';

@NgModule({
  declarations: [
    ComputadorasPage,
  ],
  imports: [
    IonicPageModule.forChild(ComputadorasPage),
  ],
})
export class ComputadorasPageModule {}
