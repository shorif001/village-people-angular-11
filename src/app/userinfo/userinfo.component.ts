import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  url="https://jsonplaceholder.typicode.com/users";
    userData:any = '';
  items:any = [];

constructor(private http:HttpClient){
  this.http.get(this.url).toPromise().then(data=>{
    this.userData=data;
  })
}



  ngOnInit(): void {
  }

}
