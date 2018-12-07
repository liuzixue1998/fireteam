import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NloginPage } from './nlogin';

@NgModule({
  declarations: [
    NloginPage,
  ],
  imports: [
    IonicPageModule.forChild(NloginPage),
  ],
})
export class NloginPageModule {}
