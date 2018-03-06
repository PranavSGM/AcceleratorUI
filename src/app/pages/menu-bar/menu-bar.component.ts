import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private ActivateRoute: ActivatedRoute, private Route : Router) { }

  ngOnInit() {
  }

  routetodatabase(){
    this.Route.navigateByUrl('DataBase/1')
      }

}
