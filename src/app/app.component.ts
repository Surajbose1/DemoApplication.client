import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  ngOnInit() {
    this.getUsers();
  }

  constructor(private http: HttpClient) {
  }

  getUsers() {
    this.http.get("https://localhost:44355/api/users").subscribe(response => {
      this.users = response;

    },
      error => {
        console.log(error);
      })
  }

}
