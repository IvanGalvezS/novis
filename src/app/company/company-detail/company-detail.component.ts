import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../service/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  @Input() company: Company;
  constructor() { }

  ngOnInit(): void {
    console.log('compñias');
    console.log(this.company);
  }

}
