import { Component, OnInit } from '@angular/core';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


@Injectable()
export class AppComponent {
  title = 'My First Angular App';
  users: any;

  constructor(
  	public http: Http
  ) { }

  ngOnInit() {
  	this.getUsers(); // Fetch categories
  }

  // To fetch all categories
  getUsers() {
    this.fetchUsers().subscribe(
      res => {
        if(res.status == 200) {
        	this.users = res.json();
        }
      },
      err => {
      	console.log("error");
      	// this.alertService.error(err._body);
      });
  }

   // To fetch categories
  fetchUsers() {
  	let contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');

    return this.http.get('http://localhost:3000/users', { headers: contentHeaders })
		.map((res: Response) => res);
  }
}
