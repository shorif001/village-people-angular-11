import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-userinfo',
  templateUrl: './single-userinfo.component.html',
  styleUrls: ['./single-userinfo.component.css']
})
export class SingleUserinfoComponent implements OnInit {

  id:any;
  http: any;
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOne();
  }
//dummy data api
//https://dummy.restapiexample.com/
getOne(){
return this.http.get('https://dummy.restapiexample.com/api/v1/employee/1');
}

}
