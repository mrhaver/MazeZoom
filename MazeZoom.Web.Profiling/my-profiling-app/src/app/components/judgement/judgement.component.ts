import { Component, OnInit } from '@angular/core';
import { Artifact } from "../../models/artifact";
import { ArtifactService } from "../../services/artifact.service";
import { Judgement } from "../../models/judgement";

@Component({
  selector: 'my-judgement-component',
  templateUrl: './judgement.component.html',
  styleUrls: ['./judgement.component.css']
})

export class JudgementComponent implements OnInit {

  public artifacts = new Array<Artifact>();
  public currArtifact: Artifact;
  public index = 0;
  public remaining: number;
  public name: String;

  constructor(private artifactService: ArtifactService) { }

  public ngOnInit(): void {
    //this.getMockedArtifacts();
    this.getInitialArtifacts();
  }

  private getInitialArtifacts(): void {
    this.artifactService.getInitialArtifacts().subscribe(returnedJson => {
      console.log(returnedJson);
      this.artifacts = returnedJson;
      this.remaining = this.artifacts.length;
      this.currArtifact = this.artifacts[this.index];
    });
  }

  public judge(judgement: Boolean): void {
    this.name = this.currArtifact.url
    this.currArtifact.judgement = (judgement ? Judgement.LIKE : Judgement.DISLIKE);
    this.artifactService.postJudgedArtifact(this.currArtifact, (): void => {
      this.index++;
      this.remaining--;
      this.currArtifact = this.artifacts[this.index];
    });
  }

  ////////// Mock Data Methods //////////

  private getMockedArtifacts(): void {
    this.artifactService.getMockedArtifacts().then(artifacts => {
      this.artifacts = artifacts;
      this.currArtifact = artifacts[this.index];
      this.remaining = artifacts.length;
    });
  }

  public getRemainingString(): String {
    var remainingString = String(this.remaining);
    return (this.remaining < 10 ? "0" + remainingString : remainingString)
  }

}
