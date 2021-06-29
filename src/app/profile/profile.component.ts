import { UsernameService } from './../username.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  uname:string;
  email:string;
  constructor(private userservice:UsernameService) { }

  ngOnInit(): void {
  }
  givename(){
     return this.userservice.getname(this.uname);
  }
}
