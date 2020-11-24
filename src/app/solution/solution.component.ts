import { Component, OnInit } from '@angular/core';
import { Company, CompanyService, System } from '../company/service/company.service';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  companies: Company[] = [];
  systems: System[] = [];
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany() {
    this.companies = this.companyService.getCompanies();
  }

}
