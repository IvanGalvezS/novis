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
@Injectable({
  providedIn: 'root'
})
export class SolutionService {

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
}
