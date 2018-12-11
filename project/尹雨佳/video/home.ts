import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

 
   num=0;
   num1=0;
   num2=0;
   zan(){
    var ion1=document.getElementById("ion");
  
    if(this.num++%2==1){
      ion1.style.color="#FF9966";
    }
    else{
      ion1.style.color="black";
    }
  }
  zan1(){
    var ion2=document.getElementById("ion2");
  
    if(this.num1++%2==1){
      ion2.style.color="#FF9966";
    }
    else{
      ion2.style.color="black";
    }
  }
  zan2(){
    var ion3=document.getElementById("ion3");
  
    if(this.num2++%2==1){
      ion3.style.color="#FF9966";
    }
    else{
      ion3.style.color="black";
    }
  }
 
}
