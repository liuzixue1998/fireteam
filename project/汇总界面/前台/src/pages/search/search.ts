import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  // itemsfood=Array();
  // arrfood=["city"];

   constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  //   for(var i=0;i<this.arrfood.length;i++){
  //     this.http.get('http://192.168.142.144:8080/'+this.arrfood[i],{
  //       headers:new HttpHeaders({}),
  //       }).subscribe((data)=>{
  //         this.itemsfood.push(data);
  //       });
  //   }
  }

  ionViewDidLoad() {
    
  }

  // myInput:string;
  // objfood=[];
  // output(){
  //   if(this.myInput){
  //     var reg =new RegExp(this.myInput,"g");
  //     for(var i=0;i<this.itemsfood.length;i++){
  //       for(var j=0;j<this.itemsfood[i].length;j++){
  //         if(reg.test(this.itemsfood[i][j].name)){
  //           this.objfood.push(this.itemsfood[i][j]);
  //         }
  //       }
  //     }
  //   }
  
  // getinformation(){
  //   this.objfood=[];
  // }
  pushSearch(){
    this.navCtrl.pop();
  }
  close(){
    this.navCtrl.pop();
  }

  todos:'';
  todolist=[];
  add(e){
    var obj={    
      todos:this.todos,
    }
  if (e.keyCode==13) {
      this.todolist.push(obj);  
      this.todos='';    
  }
  }
  del(){
    this.todolist.splice(0,this.todolist.length);
  }

}
