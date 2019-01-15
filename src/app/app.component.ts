import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  name: string = "Jhon Carter";
  age: number = 28;

  users:string[] = ['ryan', 'joe', 'cameron', 'jhon', 'richard'];
  post = [];

  activated: boolean = false;

  constructor(private dataService: DataService){

    this.dataService.getData().subscribe(data => {
      console.log(data);
      this.post = data;
    });

  }

  // name: string = 'Ryan Ray';
  // age: number;
  // address:{
  //   street: string;
  //   city: string;
  // }
  // hobbies: string[];

  // constructor(){
  //   this.age = 20;
  //   this.address = {
  //     street: '2218 Baker Street',
  //     city: 'London'
  //   }
  //   this.hobbies = ['swiming','read','write']
  // }

  sayHello(){
    for(let i = 0; i<this.users.length; i++ ){
      alert("Hello "+this.users[i]);
    }    
  }

  addUser(newUser){
    console.log(newUser.value);
    this.users.push(newUser.value);
    newUser.value = "";
    newUser.focus();
    return false;
  }

  deleteUser(user){
    for(let i=0; i < this.users.length; i++){
      if(user == this.users[i]){
        this.users.splice(i,1)
      }
    }

  }

  



}
