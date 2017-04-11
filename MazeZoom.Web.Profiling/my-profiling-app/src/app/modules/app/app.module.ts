//MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from "../app-routing/app-routing.module";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//SERVIES
import { InMemoryDataService } from "../../data/in-memory-data.service";
import { ArtifactService } from "../../services/artifact.service";

//COMPONENTS
import { AppComponent } from "../../components/app/app.component";
import { JudgementComponent } from "../../components/judgement/judgement.component";
import { OverviewComponent } from "../../components/overview/overview.component";
import { GenericService } from "../../services/service.service";
import { ModalComponent } from "../../components/modal/modal.component";


@NgModule({
  declarations: [
    AppComponent,
    JudgementComponent,
    OverviewComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule, 
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl:true}),
  ],
  providers: [ArtifactService, GenericService],
  bootstrap: [AppComponent]
})
export class AppModule { }
