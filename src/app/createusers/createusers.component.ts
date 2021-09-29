import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.css']
})
export class CreateusersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

admins:any = [];
adminsCount:number=0;

toEdit: any = {}

onCreateAdmins(adminVal:any){
  if(adminVal.value.length>0){
    this.adminsCount = this.adminsCount + 1;
    this.admins.push(adminVal.value);
    adminVal.value="";
  }
}

onEdit(index:number){
  this.toEdit = {
    data: this.admins[index]
  };
}

onUpdateAdmin = (value: any) => {
  if(value.value.length>0){
    this.admins[this.toEdit.index] = value.value;
  }
}

onRemove(removeAdmin:any){
  if(confirm('Do you want to delete this user?')){
    this.admins.splice(removeAdmin,1)
  }
}
}
