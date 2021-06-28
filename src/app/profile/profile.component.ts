import { UsernameService } from './../username.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name:string;
  email:string;
  constructor(private userservice:UsernameService) { }

  ngOnInit(): void {
  }
  givename(){
    this.userservice.getname(this.name);
  }
}
