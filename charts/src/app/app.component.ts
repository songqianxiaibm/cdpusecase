import {Component, OnInit, Input, AfterViewInit, ViewChildren} from '@angular/core';
//import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Chart } from 'chart.js';
import {ElementRef} from '@angular/core';
import {elasticsearch} from 'elasticsearch';
import { ngModuleJitUrl } from '@angular/compiler';
import { Timestamp } from 'rxjs';

//const elasticsearch = require('elasticsearch');
//const moment = require('moment');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    charts = []; // This will hold our chart info
    // @ViewChildren('mycharts') myCharts: any;
    
    constructor(private _weather: WeatherService) {}
    //public async es_getlogInfo();
    public level:string="enterprise";
    public courseData:string[] =["TRAN_Count","CPU_Utilization","CPU_TIME","Elapsed_TIME","Dispatch_TIME","Response_TIME"];
    public timelist:string[]=["last 1 hour","last 2 hours","last 3 hours","last 4 hours","last 5 hours","last 6 hours"];
    public timespanlist:string[]=["last 1 hour","last 2 hours","last 3 hours","last 4 hours","last 5 hours","last 6 hours"];
    public Systems:string[]= ['system1','system2'];
    public Regions:string[] =['region1','region2'];
    public Transactions:string[] =['transaction1','transaction2'];
    public keywords:string="hello";
    public temp_ratio_before: Array<number> =[1,2,3,2,2,1];
    public temp_ratio_after: Array<number> =[2,3,4,5,6,7];
    public cicsTime = ["2019-10-08 06:28:55.530000", "2019-10-08 06:28:55.580000", "2019-10-08 06:28:55.580000","2019-10-08 06:28:55.630000", "2019-10-08 06:28:55.680000", "2019-10-08 06:28:55.730000"];
    public showSystem:boolean = false;
    public showRegion:boolean = false;
    public showTransaction:boolean = false;
    
    ngOnInit() {
      // let Dates = [];
      // let Dates = ["2019-10-08 06:28:55.530000", "2019-10-08 06:28:55.580000", "2019-10-08 06:28:55.580000","2019-10-08 06:28:55.630000", "2019-10-08 06:28:55.680000", "2019-10-08 06:28:55.730000"];
      // let temp_ratio_before: any;
      //let temp_ratio_before: Array<number> =[1,2,3,2,2,1];
      //let stringbefore:string;
      // let temp_ratio_after:any;
      //let temp_ratio_after: Array<number> =[2,3,4,5,6,7];
      //let stringafter:any;
      //let temp_rmiTime:any;
      //let rmiTime = []

      this.showChart('Enterprise');
      // stringbefore=  " curl -XGET '9.115.112.204:9200/cars/_search?pretty' -H 'Content-Type: application/json' -d "+
      // "{ 'query': { 'range' : { 'year' : { 'gte' : 2019,'lte' : 2019}}}";
      }
  public showChart(labelname:string){
    //this._weather.dailyForecast()
      // .subscribe((res: any) => {
        //temp_ratio_before = res.hits['hits'].map(res => (res._source.RATIO===labelname));
          // temp_ratio_before = res.hits['hits'].map(res => res._source.CPU_TIME);
          // temp_ratio_after = res.hits['hits'].map(res => res._source.CPU_TIME);
          // let alldates = res.hits['hits'].map(res => res._source.TIMESTAMP);
        // console.log(document.getElementById(labelname));
        //  var ctx = document.getElementById(labelname).getContext('2d');
          new Chart(labelname, {
            type: 'line',
            data: {
              labels: this.cicsTime,
              datasets: [
                {
                  type:'line',
                  label:"Peroid 1",
                  data: this.temp_ratio_before,
                  borderColor: "#5fe2d1"
                },
                {
                  type:'line',
                  label:"Peroid 2",
                  data: this.temp_ratio_after,
                  borderColor: "#2793DB"
                },
              ]
            },
            options: {
              scales: {
                xAxes: [{
                  type:'time',
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'TIMESTAMP'
                },
                }
                ],
                yAxes: [{
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'CPU_TIME'
                },
                }]
              }
            }
          })
        //})
  }
  public addSystemChart(system){
    this.showSystem =true;
    this.showChart(system);
  // var tempChart = this.showChart(system);
  // this.charts.push(tempChart);

  }
  public addRegionChart(region){
    this.showRegion =true;
    this.showChart(region);
  }
  public addTransactionChart(transaction){
    this.showChart(transaction);
  }
}


// ngAfterViewInit() {
//   let canvasCharts = this.allMyCanvas._results;  // Get array with all canvas
//   canvasCharts.map((myCanvas, i) => {   // For each canvas, save the chart on the charts array 
//      this.charts[i].chart = new Chart(myCanvas.nativeElement.getContext('2d'), {
//        // ...
//      }
//   })
// }
