import { Company } from '../company/service/company.service';
export interface NavigatorObject {
    component: string;
    company?: Company;
}