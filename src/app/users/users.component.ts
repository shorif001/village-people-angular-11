import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  /*
    getValues(userVal:any){
        this.uservalue.push(userVal.value);
        console.log(userVal);
        uservalue.value="";
    }
     not for use
    */






uservalue: any =[];

userObj: any ={
  username: '',
  age: '',
  address:'',
  password:''
 }

 isEdit=false;
  id: any;

//  updateUser={
//   username: '',
//   age: '',
//   address:'',
//   password:''
//  }

 userCreate(){
    this.uservalue.push({
      username:this.userObj.username,
      age:this.userObj.age,
      address:this.userObj.address,
      password:this.userObj.password,
    });

    this.userObj.username = ''
    this.userObj.age = ''
    this.userObj.address = ''
    this.userObj.password = ''
  }



  onRemove(index:number){
    if(confirm('Do you want to delete this user?')){
      this.uservalue.splice(index,1);
    }
  }


  onUpdate(user:any, i: any){
    this.isEdit = true;
    this.id = i
    this.userObj = Object.assign({}, 
      {username: user.username, age: user.age, address: user.address, password: user.password})

  }
  
  
  updateUser(){
    this.uservalue[this.id] = this.userObj
  }
  
// updateUserDate(){
//  return this.uservalue.put(this.userObj)
// }



  constructor() { }

  ngOnInit(): void {
    
  }

}
