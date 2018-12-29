import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { MessagePage } from '../pages/message/message';
import { CommentPage } from '../pages/comment/comment';
import { DialoguePage } from '../pages/dialogue/dialogue';
import { MyPage } from '../pages/my/my';
import { CollectionPage } from '../pages/collection/collection';
import { PostsPage } from '../pages/posts/posts';
import { SettingPage } from '../pages/setting/setting';
import { AccountPage } from '../pages/account/account';
import { QuestionPage } from '../pages/question/question';
import {OnePage} from '../pages/one/one';
import {TwoPage} from '../pages/two/two';
import {ThreePage} from '../pages/three/three';
import{TieziPage}from '../pages/tiezi/tiezi';
import {Tiezi1Page}  from '../pages/tiezi1/tiezi1';
import {SearchPage} from '../pages/search/search';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddPage } from '../pages/add/add';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { PostPage } from '../pages/post/post';
import { MatePage } from '../pages/mate/mate';
import { LivePage } from '../pages/live/live';
import{ExpandPage} from '../pages/expand/expand';
import{YemianPage} from '../pages/yemian/yemian';
import{SeasonPage} from '../pages/season/season'
import { HttpClientModule } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from "@ionic-native/transfer";
import { FilePath } from "@ionic-native/file-path";
import { ImgService } from '../hh/ImgService';
import { NoticeService } from '../hh/NoticeService';
import { BaseUI } from '../common/baseui';


@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    AddPage,
    SigninPage,
    SignupPage,
    PostPage,
    MatePage,
    LivePage,
    MessagePage,
    CommentPage,
    DialoguePage,
    MyPage,
    CollectionPage,
    PostsPage,
    SettingPage,
    AccountPage,
    QuestionPage,
    OnePage,
    TwoPage,
    ThreePage,
    Tiezi1Page,
    TieziPage,
    SearchPage,
    ExpandPage,
    YemianPage,
    SeasonPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      tabsHideOnSubPages:true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    AddPage,
    SigninPage,
    SignupPage,
    PostPage,
    MatePage,
    LivePage,
    MessagePage,
    CommentPage,
    DialoguePage,
    MyPage,
    CollectionPage,
    PostsPage,
    SettingPage,
    AccountPage,
    QuestionPage,
    OnePage,
    TwoPage,
    ThreePage,
    Tiezi1Page,
    TieziPage,
    SearchPage,
    ExpandPage,
    YemianPage,
    SeasonPage
  ],
  providers: [
    NoticeService,
    ImgService,
    StatusBar,
    Camera,
    SplashScreen,
    ImagePicker,
    FileTransfer, FileTransferObject, File,
    Transfer, TransferObject,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
