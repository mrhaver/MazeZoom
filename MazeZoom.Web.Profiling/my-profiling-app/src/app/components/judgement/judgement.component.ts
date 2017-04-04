import { Component, OnInit } from '@angular/core';
import { Artifact } from "../../models/artifact";
import { ArtifactService } from "../../services/artifact.service";

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

    //   for (let index = 0; index < returnedJson.length; index++) {
    //       this.artifacts.push(new Artifact());
    //   }


    //   console.log(imgStrings);
    //   this.remaining = imgStrings.length;

    //   for (let i = 0; i < imgStrings.length; i++) {

    //     let a = new Artifact(i, imgStrings[i], '');
    //     this.artifacts.push(a);

    //   }
    //   this.currArtifact = this.artifacts[this.index];
    });
  }

  // public judge(judgement : string) : void {
  //   this.name = this.currArtifact.imgSrc
  //   this.currArtifact.value = judgement;
  //   this.index++;
  //   this.remaining--;
  //   this.currArtifact = this.artifacts[this.index];
  // }

}
