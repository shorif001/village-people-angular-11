import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})
export class JoinnowComponent implements OnInit {
  


  loginMode:boolean = true;
  onModeSwitch(){
  this.loginMode = !this.loginMode;
}

  constructor() { }

  ngOnInit(): void {
  
  }

}
