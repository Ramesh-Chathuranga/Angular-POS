import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
   customerCount:number=0;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>("http://localhost:8080/api/v1/customer").subscribe(value => {
      //console.log(value);
      this.customerCount=value.length;
    });

    this.http.head("http://localhost:8080/api/v1/customer").subscribe(value => {
      console.log(value);
    })
  }

}
