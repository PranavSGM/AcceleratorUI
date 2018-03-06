import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  private compFlow : string;
  //private test: String = 'test123';
  //public compFlow: String = JSON.parse('[{"form":"File", "dsname" :"DsFile01", "routeto":"File"}]');
  // public compFlow: String = JSON.parse('[{"form":"File", "dsname" :"DsFile01", "routeto":"File"},{"form":"DataBase", "dsname" :"DsDB01", "routeto":"DataBase"}]');
  constructor(private ActivateRoute: ActivatedRoute, private Route : Router) { }

  ngOnInit() {
    this.refreshUpdate();
    
  }

  refreshUpdate(){
    if(localStorage.getItem('completedFlows')){
      this.compFlow = JSON.parse(localStorage.getItem('completedFlows'));
    }
  }

  
  routetodatabase(){
    this.Route.navigateByUrl('DataBase')
      }
      
}
