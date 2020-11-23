import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import {MatTableModule} from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

@NgModule({
  declarations: [CompanyComponent, CompanyListComponent, CompanyDetailComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MatTableModule,
    MatTooltipModule,
    MatTabsModule,

  ]
})
export class CompanyModule { }
