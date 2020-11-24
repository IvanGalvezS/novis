import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface System {
    id: string;
    name: string;
    ip: string;
    hostname: string;
};
export interface Company {
  id: string;
  name: string;
  code: string;
  cloud: string;
  sname: string;
  status: number;
  systems: System[]; 
}
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }


  getCompanies() {
    const companies: Company[] = [
      {id: '1ccedd', name: 'Empresas Test JML-JM1', code: 'JM1', cloud: 'aws2', sname: 'jymmy', status:1, systems: [
        {id: '001', name: 'sistema1', ip: '192.168.1.1',hostname: 'host1'},
        {id: '002', name: 'sistema2', ip: '192.168.10.1',hostname: 'host2'}
      ]},
      {id: '2ccedd', name: 'Empresas Fertinal', code: 'FER', cloud: 'google', sname: 'Fertinal', status:2, systems: [
        {id: '001', name: 'sistema1', ip: '192.168.1.1',hostname: 'host1'},
        {id: '002', name: 'sistema2', ip: '192.168.10.1',hostname: 'host2'}
      ]},
      {id: '3ccedd', name: 'Empresas Casa & ideas S.A.', code: 'CEI', cloud: 'aws2', sname: 'Casa&ideas', status:3, systems: [
        {id: '001', name: 'sistema1', ip: '192.168.1.1',hostname: 'host1'},
        {id: '002', name: 'sistema2', ip: '192.168.10.1',hostname: 'host2'},
        {id: '003', name: 'sistema3', ip: '192.168.11.1',hostname: 'host3'},
        {id: '004', name: 'sistema4', ip: '192.168.12.1',hostname: 'host4'}
      ]},
    ]
    return companies;
  }

  companyDetail(company: Company): Observable<Company> {
    const observableCompany: Observable<Company> = new Observable((observer) => {
      observer.next(company);
      observer.complete();
    })
    return observableCompany;
  }
}
