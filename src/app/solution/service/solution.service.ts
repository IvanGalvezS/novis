import { Injectable } from '@angular/core';
export interface Enviroment {
  id: number;
  name: string;
  description: string;
};
export interface Solution {
  id: number;
  name: string;
  description: string;
}
export interface Technology {
  id: number;
  name: string;
  solutionId: number;
}
@Injectable({
  providedIn: 'root'
})
export class SolutionService {
  technologies: Technology[] = [
    {id: 1, name: 'Abap', solutionId:1},
    {id: 2, name: 'Java', solutionId:1},
    {id: 3, name: 'Dual', solutionId:2}
  ];
  constructor() { }

  getEnviroments() {
    const enviroments: Enviroment[] = [
      {id: 1, name: 'Develop', description: 'Develop des.'},
      {id: 2, name: 'Qa', description: 'Qa des'},
      {id: 3, name: 'Production', description: 'Production des'}
    ];

    return enviroments;

  }

  getSolutions() {
    const solutions: Solution[] = [
      {id: 1, name: 'ERP', description: 'ERP des'},
      {id: 2, name: 'SCM', description: 'SCM des'}
    ];
    return solutions;
  }

  getTechnolyBySolution(solutionId: number) {
    return this.technologies.filter(tech => tech.solutionId === solutionId);
  }
}
