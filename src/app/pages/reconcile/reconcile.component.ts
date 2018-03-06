import { Component, OnInit } from '@angular/core';
import { ReconcileData, NewAttribute, NewAttributeRecNum } from '../../shared/datamodel/reconcile';
import { Common } from '../../shared/datamodel/common';
@Component({
  selector: 'app-reconcile',
  templateUrl: './reconcile.component.html',
  styleUrls: ['./reconcile.component.css']
})
export class ReconcileComponent implements OnInit {
  private reconcileobject: ReconcileData;
  private jsonData: String;
  private newAttribute: NewAttribute = new NewAttribute();
  private newAttributeRecNum: NewAttributeRecNum = new NewAttributeRecNum();
  private mainObject: Common = new Common();
  constructor() {
    this.reconcileobject = new ReconcileData();
    this.reconcileobject.ComparisonKey = [];
    this.reconcileobject.NumericColumns = [];
  }

  ngOnInit() {
  }

  addFieldValue() {
    this.reconcileobject.ComparisonKey.push(this.newAttribute);
    this.newAttribute = new NewAttribute();
  }

  deleteFieldValue(index) {
    this.reconcileobject.ComparisonKey.splice(index, 1);
  }

  addFieldValueRecNum() {
    this.reconcileobject.NumericColumns.push(this.newAttributeRecNum);
    this.newAttributeRecNum = new NewAttributeRecNum();
  }

  deleteFieldValueRecNum(index) {
    this.reconcileobject.NumericColumns.splice(index, 1);
  }

  save() {
    this.jsonData = JSON.stringify(this.reconcileobject);
    this.mainObject.COmmonReconcileData = this.reconcileobject;
    localStorage.setItem('MainData',JSON.stringify( this.mainObject));

    this.expFile();
    console.log('Json file created and captured !...')
    console.log(this.jsonData);
  }

  expFile() {
    var fileText = this.jsonData;
    var fileName = "Reconcile001.json"
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
