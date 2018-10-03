import { Component, OnInit } from '@angular/core';
import { UserSrevice } from '../SharedDataServices/UserService';

@Component({
  selector: 'app-user-inject',
  templateUrl: './user-inject.component.html',
  styleUrls: ['./user-inject.component.css'],
  providers:[UserSrevice]
})
export class UserInjectComponent implements OnInit {

  userDetails:any=[];

  constructor(private _getUserDetails:UserSrevice) { }

  ngOnInit() {
this.userDetails=this._getUserDetails.getUserDetails();
  }

}
