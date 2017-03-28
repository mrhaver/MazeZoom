import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ArtifactService } from "app/services/artifact.service";
import { InMemoryDataService } from "app/data/in-memory-data.service";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { OverviewComponent } from "app/components/overview/overview.component";
import { JudgementComponent } from "app/components/judgement/judgement.component";
import { AppComponent } from "app/components/app/app.component";
import { AppRoutingModule } from "app/modules/app-routing/app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    JudgementComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule, 
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ArtifactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
