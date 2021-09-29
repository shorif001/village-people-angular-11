import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  peopleInfo = [
    { id:1, name:"Masud", address:"shopnopur", email:"shopnobaj@gmail.com" },
    { id:2, name:"Masud", address:"shopnopur", email:"shopnobaj@gmail.com" },
    { id:3, name:"Masud", address:"shopnopur", email:"shopnobaj@gmail.com" },
    { id:4, name:"Masud", address:"shopnopur", email:"shopnobaj@gmail.com" },
    { id:5, name:"Masud", address:"shopnopur", email:"shopnobaj@gmail.com" },
    { id:6, name:"Masud", address:"shopnopur", email:"shopnobaj@gmail.com" },
    { id:7, name:"Masud", address:"shopnopur", email:"shopnobaj@gmail.com" },
    { id:8, name:"Masud", address:"shopnopur", email:"shopnobaj@gmail.com" },
    { id:9, name:"Masud", address:"shopnopur", email:"shopnobaj@gmail.com" },
    { id:10, name:"Masud", address:"shopnopur", email:"shopnobaj@gmail.com" },
  ]




  constructor() { }

  ngOnInit(): void {
  }

}
