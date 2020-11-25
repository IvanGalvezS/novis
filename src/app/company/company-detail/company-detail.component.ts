import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Company, System } from '../service/company.service';
import {Chart} from 'chart.js';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { NavigatorObject } from '../../interfaces/navigator-object';


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit, AfterViewInit {

  @Output() component = new EventEmitter<NavigatorObject>();
  @Input() company: Company;
  
  chart1: any;
  chart2: any;
  chart3: any;
  chart4: any;
  
  @ViewChild('line1') line1;
  @ViewChild('line2') line2;
  @ViewChild('line3') line3;
  @ViewChild('line4') line4;

  displayedColumns: string[] = ['id', 'name', 'ip', 'hostname', 'actions'];
  dataSource: MatTableDataSource<System>;
  systems: System[] = [];
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    console.log('compñias');
    console.log(this.company.systems);
    this.systems = this.company.systems;
    this.dataSource = new MatTableDataSource(this.systems);
  }
  ngAfterViewInit() {
    this.displayChart();
    this.dataSource.sort = this.sort;
  }

  openSystemView() {
    console.log('open view');
    const navigatorObj: NavigatorObject = {component: 'system'}
    this.component.emit(navigatorObj);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayChart() {
    this.chart1 = new Chart(this.line1.nativeElement,{
      type: 'line',
      options: {responsive: true} ,
      data: {
        labels: ['00:00', '02:00', '04:00','06:00','08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
        datasets: [
          {
            label: 'Estimated Charged',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(255,0,0,1)',
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
            data: [10, 40, 30, 25, 65, 80, 40, 20, 60, 50, 60, 15],
            spanGaps: false,
          }
        ]
      }
    } );
    this.chart2 = new Chart(this.line2.nativeElement,{
      type: 'line',
      options: {responsive: true} ,
      data: {
        labels: ['00:00', '02:00', '04:00','06:00','08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
        datasets: [
          {
            label: 'Instance Status Failed',
            fill: false,
            borderColor: "#FF0000",
            borderDash: [5, 5],
            backgroundColor: "#FF0000",
            pointBackgroundColor: "#55bae7",
            pointBorderColor: "#55bae7",
            pointHoverBackgroundColor: "#55bae7",
            pointHoverBorderColor: "#55bae7",
            data: [0, 60, 80, 70, 80, 40, 55, 90, 75, 60, 55, 40],
            spanGaps: false,
          }
        ]
      }
    } );
    this.chart3 = new Chart(this.line3.nativeElement,{
      type: 'line',
      options: {responsive: true} ,
      data: {
        labels: ['00:00', '02:00', '04:00','06:00','08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
        datasets: [
          {
            label: 'vCpu Count',
            fill: false,
            lineTension: 0.1,
            borderColor: "#FF0000",
            borderDash: [5, 5],
            backgroundColor: "#FF0000",
            pointBackgroundColor: "#55bae7",
            pointBorderColor: "#55bae7",
            pointHoverBackgroundColor: "#55bae7",
            pointHoverBorderColor: "#55bae7",
            data: [0, 50, 80, 81, 56, 55, 40, 60, 85, 90, 95, 60],
            spanGaps: false,
          }
        ]
      }
    } );
    this.chart4 = new Chart(this.line4.nativeElement,{
      type: 'line',
      options: {responsive: true} ,
      data: {
        labels: ['00:00', '02:00', '04:00','06:00','08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
        datasets: [
          {
            label: 'EBS Burts Balance',
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
    } );
  }

}
