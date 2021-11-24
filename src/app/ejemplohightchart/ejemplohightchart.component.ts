import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ejemplohightchart',
  templateUrl: './ejemplohightchart.component.html',
  styleUrls: ['./ejemplohightchart.component.css']
})
export class EjemplohightchartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };

  Highcharts1: typeof Highcharts = Highcharts;

  chartOptions1: Highcharts.Options = {
    series: [{
      data: [5, 6, 4],
      type: 'pie'
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
