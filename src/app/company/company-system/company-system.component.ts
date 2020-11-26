import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SolutionService, Solution, Technology, Enviroment } from '../../solution/service/solution.service';
import { NavigatorObject } from '../../interfaces/navigator-object';
import { Company } from '../service/company.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-company-system',
  templateUrl: './company-system.component.html',
  styleUrls: ['./company-system.component.css']
})
export class CompanySystemComponent implements OnInit {

  @Output() component = new EventEmitter<NavigatorObject>();
  @Input() company: Company;

  solutions: Solution[] = [];
  technologies: Technology[] = [];
  enviroments: Enviroment[] = [];
  constructor(private solutionService: SolutionService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getSolutions();
    this.getEnviroments();
  }

  goBack() {
    const navigatorObj: NavigatorObject = {component: 'detail', company: this.company }
    this.component.emit(navigatorObj);
  }

  getSolutions() {
    this.solutions = this.solutionService.getSolutions();
  }

  changeTechnology(solution: Solution) {
    this.technologies = this.solutionService.getTechnolyBySolution(solution.id);
    console.log(this.technologies);
  }

  openSnackBar() {
    this._snackBar.open('Save form!!', 'Close', {
      duration: 500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
  getEnviroments() {
    this.enviroments = this.solutionService.getEnviroments();
  }

  cancel() {
    Swal.fire({
      title: 'Are you sure?',
      text: "Data will be lost and you will be redirected",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.goBack();
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
      }
    })
  }

}
