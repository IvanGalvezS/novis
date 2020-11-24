import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionRoutingModule } from './solution-routing.module';
import { SolutionComponent } from './solution.component';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [SolutionComponent],
  imports: [
    CommonModule,
    SolutionRoutingModule,
    MatTableModule,
    MatTooltipModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class SolutionModule { }
