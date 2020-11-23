import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { CompanyService, Company } from '../service/company.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { NavigatorObject } from '../../interfaces/navigator-object';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit, AfterViewInit {
  @Output() component = new EventEmitter<NavigatorObject>();
  companies: Company[] = [];
  displayedColumns: string[] = ['id','code','name','cloud','sname','status', 'actions'];
  dataSource: MatTableDataSource<Company>;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
    this.dataSource = new MatTableDataSource(this.companies);
    console.log(this.companies);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getCompanies() {
    this.companies = this.companyService.getCompanies();
  }
  goDetail(company: Company) {
    const navigatorObj: NavigatorObject = {component: 'detail', company: company}
    this.component.emit(navigatorObj);
  }

}
