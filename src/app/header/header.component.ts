import { UsernameService } from './../username.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Username:string;
  constructor(private userserice:UsernameService) { }

  ngOnInit(): void {
    this.userserice.setname().subscribe(user=>{
      this.Username = user;
      console.log(this.Username);
    })
  }
}
