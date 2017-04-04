import { Component, OnInit } from '@angular/core';
import { ArtifactService } from "../../services/artifact.service";
import { Artifact } from "../../models/artifact";

@Component({
  selector: 'my-overview-component',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {

  public artifacts = new Array<Artifact>();
  public indexFirst: number;
  public indexSecond: number;
  public indexThird: number;

  constructor(private artifactService: ArtifactService, ) { }

  public ngOnInit(): void {
    this.indexFirst = 0;
    this.indexSecond = 1;
    this.indexThird = 2;
    this.getInitialArtifacts();
  }

  private getInitialArtifacts(): void {
    this.artifacts = JSON.parse(localStorage.getItem('judgedArtifacts'));
  }

  public next(): void {
    this.indexFirst = this.loopUp(this.indexFirst);
    this.indexSecond = this.loopUp(this.indexSecond);
    this.indexThird = this.loopUp(this.indexThird);
  }

  public previous(): void {
    this.indexFirst = this.loopDown(this.indexFirst);
    this.indexSecond = this.loopDown(this.indexSecond);
    this.indexThird = this.loopDown(this.indexThird);
  }

  private loopUp(number: number): number {
    number++;
    return (number > (this.artifacts.length - 1) ? 0 : number);
  }

  private loopDown(number: number): number {
    number--;
    return (number < 0 ? (this.artifacts.length - 1) : number);
  }

  ////////// Mock Data Methods //////////

  public getMockedArtifactsOverview(): void {
    this.artifactService.getMockedArtifacts().then(artifacts => {
      this.artifacts = artifacts;
    });
  }

}
