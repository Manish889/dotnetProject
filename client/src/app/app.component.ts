import { AccountService } from './_services/account.service';
import { User } from './_models/user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';
  users: any;
  constructor(private http: HttpClient, private accountService: AccountService) {}
  ngOnInit() {
  this.setCurrentUser();
  // console.log(JSON.parse(localStorage.getItem('user')!))
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user')!); 
    this.accountService.setCurrentUser(user);
  }


}
