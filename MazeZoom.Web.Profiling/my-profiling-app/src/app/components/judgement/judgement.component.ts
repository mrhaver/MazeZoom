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

  public name: string;
  public artifacts = new Array<Artifact>();
  public currArtifact: Artifact;
  public index = 0;
  public remaining: number;

  constructor(private artifactService: ArtifactService) { }

  ngOnInit(): void {
    //this.getArtifacts();
    this.getArtifactsApi();
  }


  getArtifacts(): void {
    this.artifactService.getArtifacts().then(artifacts => this.artifacts = artifacts)
      .then(artifacts => {
        this.currArtifact = artifacts[this.index];
        this.remaining = artifacts.length;
      });
  }

  getArtifactsApi(): void {
    this.artifactService.getArtifactsApi().subscribe(returnedJson => {
      console.log(returnedJson);
      this.artifacts = returnedJson;
      this.remaining = this.artifacts.length;
      this.currArtifact = this.artifacts[this.index];
    });
  }

  public judge(judgement : Boolean) : void {
    this.name = this.currArtifact.url
    this.currArtifact.judgement = (judgement ? Judgement.LIKE : Judgement.DISLIKE);
    this.index++;
    this.remaining--;
    this.currArtifact = this.artifacts[this.index];
  }

}
