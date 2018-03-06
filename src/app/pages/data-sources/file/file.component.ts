import { Component, OnInit } from '@angular/core';
import { file, DataSourceFile } from '../../../shared/datamodel/datasources-file';
import { Common } from '../../../shared/datamodel/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UpdateComponent } from '../../update/update.component';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  public fileObject: file;
  public jsonData: String;
  private compFlow: string;
  private flowDetail: string;
  private mainObject: Common = new Common();
  private updateComp1: UpdateComponent;
  private id: String;


  constructor(private activateRoute: ActivatedRoute, private Route: Router, private updateComp: UpdateComponent) {

    this.updateComp1 = new UpdateComponent(activateRoute, Route);
    this.fileObject = new file();
    this.fileObject.File = new DataSourceFile();

    // var oldTags = [{text: 'xyz'}, {text: 'abc'}];
    // var newTags = ['New!'];
    // var combinedTags = oldTags.concat(newTags.map(function(tag) { return {text: tag} }));
    // console.log(oldTags);
    // console.log(newTags);
    // console.log(combinedTags);
  }

  ngOnInit() {
    if (localStorage.getItem('MainData')) {
      this.mainObject = JSON.parse(localStorage.getItem('MainData'));
    }
    //this.compFlow = JSON.parse(localStorage.getItem('completedFlows'));
    //console.log('********************************** 111111 **********');
    //console.log(this.compFlow);
    this.fileObject.Type = 'file';

    this.activateRoute.params.subscribe();
    this.activateRoute.params.subscribe(a => { this.id = a['id'] });

    if (this.id) {
      console.log('New Form Creation initiated !');
    } else {
      console.log('form updation initiated !')
      if (this.mainObject.CommonFile) {
        this.fileObject = this.mainObject.CommonFile;
      }
    }



  }

  save() {

    this.mainObject.CommonFile = this.fileObject;
    localStorage.setItem('MainData', JSON.stringify(this.mainObject));

    //console.log('********** 22222222 ******** ');
    this.flowDetail = JSON.parse('[{"form":"File", "dsname" : "' + this.fileObject.DataSourceName + '", "routeto":"File"}]');

    if (localStorage.getItem('completedFlows')) {
      this.compFlow = JSON.parse(localStorage.getItem('completedFlows'));
      this.compFlow = this.compFlow.concat(this.flowDetail);
      localStorage.setItem('completedFlows', JSON.stringify(this.compFlow));
      //console.log(this.compFlow);
    } else {
      this.compFlow = this.flowDetail;
      localStorage.setItem('completedFlows', JSON.stringify(this.compFlow));
      //console.log(this.compFlow);
    }
    //console.log(this.fileObject.DataSourceName);

    //console.log(this.compFlow);

    this.jsonData = JSON.stringify(this.fileObject);
    //this.expFile();
    //console.log('Json file created and captured !...')
    //console.log(this.jsonData);
    //this.Route.navigate(' " localhost:4200 " ');

    this.updateComp.refreshUpdate();
    // this.updateComp1.ngOnInit();
  }

  expFile() {
    var fileText = this.jsonData;
    var fileName = "File001.json"
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
