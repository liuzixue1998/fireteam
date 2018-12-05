import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TogetherPage } from './together';
import { FeedbackPage } from '../feedback/feedback';

@NgModule({
  declarations: [
    TogetherPage,
  ],
  imports: [
    IonicPageModule.forChild(TogetherPage),
  ],
})
export class TogetherPageModule {}
