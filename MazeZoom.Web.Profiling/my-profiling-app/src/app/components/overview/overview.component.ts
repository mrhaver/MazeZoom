import { Component, OnInit } from '@angular/core';
import { ArtifactService } from "../../services/artifact.service";
import { Artifact } from "../../models/artifact";

@Component({
  selector: 'my-overview-component',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {

  constructor(private artifactService: ArtifactService, ) { }

  public artifacts = new Array<Artifact>();
  public indexFirst: number;
  public indexSecond: number;
  public indexThird: number;

  public ngOnInit(): void {
    this.getMockedArtifactsOverview();
  }

  // private getInitialArtifacts(): void {
  //   this.artifactService.getInitialArtifacts().subscribe(returnedArtifacts => {
  //     console.log(returnedArtifacts);
  //     this.artifacts = returnedArtifacts;
  //   });
  // }

  public getMockedArtifactsOverview(): void {
    this.artifactService.getMockedArtifacts().then(artifacts => {
      this.artifacts = artifacts;
      this.indexFirst = 0;
      this.indexSecond = 1;
      this.indexThird = 2;
    });
  }

  public next(): void {
    this.indexFirst++;
    this.indexSecond++;
    this.indexThird++;
    if (this.indexFirst > (this.artifacts.length - 1))
      this.indexFirst = 0;
    if (this.indexSecond > (this.artifacts.length - 1))
      this.indexSecond = 0;      
    if (this.indexThird > (this.artifacts.length - 1))
      this.indexThird = 0;    
  }

  public previous(): void {
    this.indexFirst--;
    this.indexSecond--;
    this.indexThird--;
    if (this.indexFirst < 0)
      this.indexFirst = this.artifacts.length - 1;
    if (this.indexSecond < 0) 
      this.indexSecond = this.artifacts.length - 1;      
    if (this.indexThird < 0) 
      this.indexThird = this.artifacts.length - 1;
  }

}
