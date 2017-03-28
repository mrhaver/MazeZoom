import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from "app/components/overview/overview.component";
import { JudgementComponent } from "app/components/judgement/judgement.component";

const routes: Routes = [
  { path: 'judgement',  component: JudgementComponent },
  { path: 'overview',  component: OverviewComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}