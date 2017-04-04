import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JudgementComponent } from "../../components/judgement/judgement.component";
import { OverviewComponent } from "../../components/overview/overview.component";



const routes: Routes = [
  { path: '', redirectTo: '/judgement', pathMatch: 'full' },
  { path: 'judgement',  component: JudgementComponent },
  { path: 'overview',  component: OverviewComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}