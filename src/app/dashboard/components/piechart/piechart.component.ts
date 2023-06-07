import { Component, Input, OnChanges, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';

import Chart from 'chart.js/auto';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
})
export class PiechartComponent implements OnInit, OnChanges {
  @Input() chartData: any;
  // @Input() numberOfTables: number = 10;
  // @Input() numberOfChairs: number = 30;
  // @Input() numberOfLamps: number = 6;
  numberOfTables1: number = 10;
  numberOfChairs1: number = 30;

  numberOfLamps1: number = 6;

  table: number = 10;
  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }
  ngOnChanges(): void {
    this.chart.destroy();
    console.log(this.chartData, 'chart data');

    this.numberOfChairs1 = this.chartData.chairs;
    this.numberOfLamps1 = this.chartData.lamps;
    this.numberOfTables1 = this.chartData.tables;
    console.log(this.numberOfChairs1, 'chrt1');

    this.createChart();
  }
  public chart: any;


  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'doughnut',
      data: {
        labels: ['Chairs', 'Tables', 'Lamps'],
        datasets: [
          {
            label: 'Pie Chart',
            data: [
              this.numberOfChairs1,
              this.numberOfTables1,
              this.numberOfLamps1,
            ],
            backgroundColor: ['#B1BAC1', '#CCAB82', '#1D716C'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}
