import { Component, OnInit } from '@angular/core';
import { Artifact } from "../../models/artifact";
import { ArtifactService } from "../../services/artifact.service";

@Component({
  selector: 'my-judgement-component',
  templateUrl: './judgement.component.html',
  styleUrls: ['./judgement.component.css']
})

export class JudgementComponent implements OnInit {

  constructor(private artifactService: ArtifactService) { }

  ngOnInit(): void {
    this.getArtifacts();
  }
  name: string;
  artifacts: Artifact[];
  currArtifact: Artifact;
  index = 0;
  remaining: number;


  getArtifacts(): void {
    this.artifactService.getArtifacts().then(artifacts => this.artifacts = artifacts)
      .then(artifacts => {
        this.currArtifact = artifacts[this.index];
        this.remaining = artifacts.length;
      });
  }

  getArtifactsApi(): void {
    this.artifactService.getArtifactsApi().subscribe(artifacts => {
      console.log(artifacts);
    })
  }

  like(): void {
    this.name = this.currArtifact.imgSrc
    this.currArtifact.value = 'LIKE';
    this.index++;
    this.remaining--;
    this.currArtifact = this.artifacts[this.index];
  }
  dislike(): void {
    this.name = 'DISLIKE';
    this.currArtifact.value = 'DISLIKE';
    this.index++;
    this.remaining--;
    this.currArtifact = this.artifacts[this.index];
  }

}
