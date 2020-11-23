import { Component, OnInit } from '@angular/core';
import { NavigatorObject } from '../interfaces/navigator-object';
import { Company } from './service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  component: string;
  company: Company;
  constructor() { }

  ngOnInit(): void {
    this.component = 'list';
  }

  onChangeComponent(navigatorObj: NavigatorObject) {
    this.component = navigatorObj.component;
    if (navigatorObj.company) {
      this.company = navigatorObj.company;
    }
    
  }

}
