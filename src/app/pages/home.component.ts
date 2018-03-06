import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private compFlow: string;
  constructor() {
    // this.compFlow = JSON.parse(localStorage.getItem('completedFlows'));
    // if (this.compFlow.length == 0) {
    //   this.compFlow = JSON.parse('[{"form":"Dummy", "dsname" :"Dummy01", "routeto":"toDummy"}]');
    // }


  }

  ngOnInit() {
    // localStorage.setItem('completedFlows', JSON.stringify(this.compFlow));
  }

}
