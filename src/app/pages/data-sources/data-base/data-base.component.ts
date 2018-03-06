import { Component, OnInit, ChangeDetectorRef, OnChanges, SimpleChanges, Input } from '@angular/core';
import { database, DataSourceDatabase } from '../../../shared/datamodel/datasources-database';
import { file, DataSourceFile } from '../../../shared/datamodel/datasources-file';
import { Common } from '../../../shared/datamodel/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-base',
  templateUrl: './data-base.component.html',
  styleUrls: ['./data-base.component.css']
})
// export class DataBaseComponent implements OnChanges,OnInit {
export class DataBaseComponent implements OnInit {
  private databaseobject: database;
  private jsonData: String;
  private MainObject: Common = new Common();
  private id: String;

  // public productID :String;
  // public path : String;

  // @Input()
  // public id : String;

  // constructor(private ActivateRoute : ActivatedRoute, private Route: Router, private cdRef:ChangeDetectorRef) {
  constructor(private ActivateRoute: ActivatedRoute) {
    this.databaseobject = new database();
    this.databaseobject.DataBase = new DataSourceDatabase();
    this.databaseobject.Type = 'database';
    //this.productID = ActivateRoute.snapshot.params['id'];

  }

  //   ngOnChanges(changes: SimpleChanges) {
  //     for (let propName in changes) {  
  //       let change = changes[propName];
  //       let curVal  = JSON.stringify(change.currentValue);
  //       let prevVal = JSON.stringify(change.previousValue);
  //     console.log('change fired');
  //     console.log('changed to ', propName);
  //             console.log(curVal);
  //             console.log(prevVal);
  //   }
  // }

  ngOnInit() {
    this.MainObject = JSON.parse(localStorage.getItem('MainData'));
    //this.path = JSON.parse(this.ActivateRoute.url);
    // this.productID = this.ActivateRoute.snapshot.params['id'];
    // if(this.productID == '1'){console.log('New Form Creation initiated !');
    //     }else {
    //       console.log('form updation initiated !')
    //     if(this.MainObject.CommonDatabase){
    //     this.databaseobject=this.MainObject.CommonDatabase;
    //   }  
    // }   
    // this.productID = this.ActivateRoute.snapshot.params['id'];

    //this.cdRef.detectChanges();

    this.ActivateRoute.params.subscribe();
    this.ActivateRoute.params.subscribe(a => { this.id = a['id'] });

    if (this.id) {
      console.log('New Form Creation initiated !');
    } else {
      console.log('form updation initiated !')
      if (this.MainObject.CommonDatabase) {
        this.databaseobject = this.MainObject.CommonDatabase;
      }
    }
  }


  save() {
   
    this.MainObject.CommonDatabase = this.databaseobject;
    localStorage.setItem('MainData', JSON.stringify(this.MainObject));
    //this.jsonData = JSON.stringify(this.databaseobject);
    // this.expFile();
    // console.log('Json file created and captured !...')
    // console.log(this.jsonData);

  }

  expFile() {
    var fileText = this.jsonData;
    var fileName = "DataBase001.json"
    this.saveTextAsFile(fileText, fileName);
  }

  saveTextAsFile(data, filename) {

    if (!data) {
      console.error('Console.save: No data')
      return;
    }

    if (!filename) filename = 'console.json'

    var blob = new Blob([data], { type: 'json/plain' }),
      e = document.createEvent('MouseEvents'),
      a = document.createElement('a')
    // FOR IE:

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, filename);
    }
    else {
      var e = document.createEvent('MouseEvents'),
        a = document.createElement('a');

      a.download = filename;
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['json/plain', a.download, a.href].join(':');
      e.initEvent('click', true, false);
      a.dispatchEvent(e);
    }
  }

}
