import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Company } from '../service/company.service';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit, AfterViewInit {
  @Input() company: Company;
  chart2: any;

  @ViewChild('line2') line2;

  constructor() { }

  ngOnInit(): void {
    console.log('compñias');
    console.log(this.company);
    //this.displayChart();
  }
  ngAfterViewInit() {
    this.displayChart();
  }

  displayChart() {
    this.chart2 = new Chart(this.line2.nativeElement,{
      type: 'line',
      data: {
        labels: ['09:00', '10:00', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        datasets: [
          {
            label: 'Estimated Charged',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
            spanGaps: false,
          }
        ]
      }
    } )
  }

}
