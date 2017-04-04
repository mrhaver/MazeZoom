import { Component, OnInit } from '@angular/core';
import { ArtifactService } from "../../services/artifact.service";
import { Artifact } from "../../models/artifact";

@Component({
  selector: 'my-overview-component',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {

  constructor(private artifactService: ArtifactService, ){}

  artifacts = new Array<Artifact>();

  ngOnInit(): void {
    this.getArtifactsOverview();
  }

  // getOverviewArtifactsApi(): void {
  //   this.artifactService.getArtifactsApi().subscribe(artifacts=>{
  //     this.artifacts = artifacts;
  //   });
  // }

   getArtifactsOverview(): void {
    this.artifactService.getArtifacts().then(artifacts => this.artifacts = artifacts)
      .then(artifacts => {
        this.artifacts = artifacts;
      });
  }
    
}
