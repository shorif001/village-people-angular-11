import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {



  
  variable = "this is variable";

getName(){
  return "This is Function";
}

thisMethod(){
  return this.variable + ", This is 'this.method'";
}


nameEvent(){
  alert("This is click event");
}

 currentval="";

myEvent(currentval: any){
  console.log(currentval);
}

getVal(val:any){
  console.warn(val);
}


name="property binding";


// show=false;


show1='yes';


show='blue';

// switchcase

colors="green";


// for Loop in angular

data=['shorif', 'korim', 'rohim'];

data1=[
  {
    name:"shorif",
    id:2,
    email:"shorif@gmail.com",
  },
  {
    name:"korim",
    id:3,
    email:"korim@gmail.com",
  },
  {
    name:"rohim",
    id:4,
    email:"rohim@gmail.com",
  },
  {
    name:"rofik",
    id:5,
    email:"rofik@gmail.com",
  }
];


//Simple form in anular


getValue(val: any){
  console.log(val);
}


//style binding in angular
color="red";

getColor(){
  this.color="blue";
}

color1="red";
change=true;
getColorChange(){
  this.change=!this.change;
}

// pipe
aboutName="shorif ahmed";

today=Date.now();

str="This is slice";
money=100;


//call api




  ngOnInit(): void {
  }

}
