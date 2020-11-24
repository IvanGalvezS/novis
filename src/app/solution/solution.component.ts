import { Component, OnInit } from '@angular/core';
import { Company, CompanyService, System } from '../company/service/company.service';
import { SolutionService, Enviroment, Solution } from './service/solution.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  companies: Company[] = [];
  systems: System[] = [];
  environments: Enviroment[] = [];
  solutions: Solution[] = [];
  prs: string[] = ['PR8-DB', 'PR8-ACS', 'PR8-DI'];
  addForm = false;
  constructor(private companyService: CompanyService, private solutionService: SolutionService) { }

  ngOnInit(): void {
    this.getCompany();
    this.getEnviroments();
    this.getSolutions();
  }

  getCompany() {
    this.companies = this.companyService.getCompanies();
  }
  getEnviroments() {
    this.environments = this.solutionService.getEnviroments();
  }
  getSolutions() {
    this.solutions = this.solutionService.getSolutions();
  }

  selectCompany(company: Company) {
    console.log(company);
    this.systems = company.systems;
    console.log(this.systems);
  }

  showForm() {
    this.addForm = true;
  }

}
