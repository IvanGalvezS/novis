import { Component, OnInit } from '@angular/core';
import { SolutionService, Solution } from '../../solution/service/solution.service';

@Component({
  selector: 'app-company-system',
  templateUrl: './company-system.component.html',
  styleUrls: ['./company-system.component.css']
})
export class CompanySystemComponent implements OnInit {
  solutions: Solution[] = [];
  constructor(private solutionService: SolutionService) { }

  ngOnInit(): void {
    this.getSolutions();
  }

  getSolutions() {
    this.solutions = this.solutionService.getSolutions();
  }

}
