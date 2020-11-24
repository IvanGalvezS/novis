import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterLayoutComponent } from './shared/master-layout/master-layout.component';


const routes: Routes = [
  {
    path: 'novis',component:MasterLayoutComponent,  children: [
      {path: 'home', loadChildren: () => import('./home/home.module').then(h => h.HomeModule)},
      {path: 'company', loadChildren: () => import('./company/company.module').then(c => c.CompanyModule)},
      {path: 'solution', loadChildren: () => import('./solution/solution.module').then(s => s.SolutionModule)},
    ]
  },
  {path: '**', redirectTo: 'novis/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
