import { Component, OnInit, AnimationTransitionEvent, ViewChild } from '@angular/core';
import { Artifact } from "../../models/artifact";
import { ArtifactService } from "../../services/artifact.service";
import { Judgement } from "../../models/judgement";
import { Router } from "@angular/router";
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'my-judgement-component',
  templateUrl: './judgement.component.html',
  styleUrls: ['./judgement.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      state('void', style({ opacity: 0 })),
      state('LIKE', style({ opacity: 0 })),
      state('DISLIKE', style({ opacity: 0 })),
      transition('void => NONE', [
        animate(600, keyframes([
          style({ opacity: 0 }),
          style({ opacity: 1 })
        ]))
      ]),
      transition('LIKE => NONE', [
        animate(500, keyframes([
          style({ opacity: 0 }),
          style({ opacity: 0 }),
          style({ opacity: 0 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),
        ]))
      ]),
      transition('DISLIKE => NONE', [
        animate(500, keyframes([
          style({ opacity: 0 }),
          style({ opacity: 0 }),
          style({ opacity: 0 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),
        ]))
      ])
    ]),
    trigger('flyOutAnimation', [
      transition('NONE => LIKE', [
        animate(600, keyframes([
          style({ opacity: 1, transform: 'translate(0%, 0%)' }),
          style({ opacity: 0.5, transform: 'translate(45%, -5%)' }),
          style({ opacity: 0.5, transform: 'translate(85%, -10%)' }),
          style({ opacity: 0, transform: 'translate(100%, -15%)' })
        ]))
      ]),
      transition('NONE => DISLIKE', [
        animate(600, keyframes([
          style({ opacity: 1, transform: 'translate(0%, 0%)' }),
          style({ opacity: 0.5, transform: 'translate(-45%, -5%)' }),
          style({ opacity: 0.5, transform: 'translate(-85%, -10%)' }),
          style({ opacity: 0, transform: 'translate(-100%, -15%)' })
        ]))
      ])
    ])
  ]
})

export class JudgementComponent implements OnInit {

  public artifacts = new Array<Artifact>();
  public currArtifact: Artifact;
  public index = 0;
  public remaining: number;

  @ViewChild(ModalComponent)
  public readonly modal: ModalComponent;

  constructor(private router: Router, private artifactService: ArtifactService) { }

  public ngOnInit(): void {
    this.getInitialArtifacts();
  }

  private getInitialArtifacts(): void {
    this.artifactService.getInitialArtifacts().subscribe(returnedArtifacts => {
      console.log(returnedArtifacts);
      this.artifacts = returnedArtifacts;
      this.remaining = this.artifacts.length;
      this.currArtifact = this.artifacts[this.index];
    });
  }

  public animateJudge(judgement: Boolean): void {
    this.currArtifact.Judgement = (judgement ? Judgement.LIKE : Judgement.DISLIKE);
  }

  public processAnimation(event: AnimationTransitionEvent): void {
    console.log(event);
    if (event.fromState == 'NONE' && (event.toState == 'LIKE' || event.toState == 'DISLIKE'))
      this.judge();
  }

  public judge(): void {
    //this.artifacts[this.index] = this.currArtifact;
    this.artifactService.postJudgedArtifact(this.artifacts).subscribe(returnedArtifacts => {
      console.log(returnedArtifacts);
      this.artifacts = returnedArtifacts;
      this.index++;
      this.remaining--;
      if (this.index == (this.artifacts.length)) {
        localStorage.setItem('judgedArtifacts', JSON.stringify(this.artifacts));
        this.router.navigateByUrl('overview');
      }
      this.currArtifact = this.artifacts[this.index];
    });
  }

  public getJudgementValue(): String {
    return Judgement[this.currArtifact.Judgement];
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
    let remainingString = String(this.remaining);
    return (this.remaining < 10 ? "0" + remainingString : remainingString)
  }

}
