import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LivePage } from '../live/live';
import { PostPage } from '../post/post';
import { MatePage } from '../mate/mate';
import{ExpandPage} from '../expand/expand';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  homepage;
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera, private transfer: FileTransfer) {
    this.homepage=HomePage;
  }
  close(){
    this.navCtrl.push(this.homepage);
  }
  images:Array<{src:String}>;
  takePhoto(sourceType){
    const options:CameraOptions={
      quality:100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType:this.camera.PictureSourceType.CAMERA,
      allowEdit:false,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum:true,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imgPath)=>{
      this.doupload(imgPath);
    });
    this.camera.getPicture(options).then((imageData)=>{
      
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.images.unshift({
        src:base64Image
      })
  
    },(err)=>{});
  }
  
  doupload(filePath){
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'name.jpg',  // 文件类型
      mimeType:'image/jpeg',
      headers: {},
      params: {
        name:'hh',
        age:20
      },    // 如果要传参数，写这里
    }
    var api="上传图片的地址"
    fileTransfer.upload(filePath,api, options)
    .then((data) => {
      alert(JSON.stringify(data));
    }, (err) => {
      alert(err);
      alert(JSON.stringify(err));
    })
  }
  

  livee(){
    this.navCtrl.push(LivePage);
  }
  postt(){
    this.navCtrl.push(PostPage);
  }
  matee(){
    this.navCtrl.push(MatePage);
  }
  goexpand(){
    this.navCtrl.push(ExpandPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
