"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var artifact_service_1 = require("../../services/artifact.service");
var judgement_1 = require("../../models/judgement");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/animations");
var modal_component_1 = require("../modal/modal.component");
var JudgementComponent = (function () {
    function JudgementComponent(router, artifactService) {
        this.router = router;
        this.artifactService = artifactService;
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this.artifacts = new Array();
        this.index = 0;
    }
    JudgementComponent.prototype.ngOnInit = function () {
        this.getRandomInitialArtifacts();
    };
    JudgementComponent.prototype.getInitialArtifacts = function () {
        var _this = this;
        this.artifactService.getInitialArtifacts().subscribe(function (returnedArtifacts) {
            console.log(returnedArtifacts);
            _this.artifacts = returnedArtifacts;
            _this.remaining = _this.artifacts.length;
            _this.currArtifact = _this.artifacts[_this.index];
        });
    };
    JudgementComponent.prototype.getRandomInitialArtifacts = function () {
        var _this = this;
        this.artifactService.getRandomInitialArtifacts().subscribe(function (returnedArtifacts) {
            console.log(returnedArtifacts);
            _this.artifacts = returnedArtifacts;
            _this.remaining = _this.artifacts.length;
            _this.currArtifact = _this.artifacts[_this.index];
        });
    };
    JudgementComponent.prototype.animateJudge = function (judgement) {
        this.currArtifact.Judgement = (judgement ? judgement_1.Judgement.LIKE : judgement_1.Judgement.DISLIKE);
    };
    JudgementComponent.prototype.processAnimation = function (event) {
        console.log(event);
        if (event.fromState == 'NONE' && (event.toState == 'LIKE' || event.toState == 'DISLIKE'))
            this.judge();
    };
    JudgementComponent.prototype.judge = function () {
        var _this = this;
        //this.artifacts[this.index] = this.currArtifact;
        this.artifactService.postJudgedArtifact(this.artifacts).subscribe(function (returnedArtifacts) {
            console.log(returnedArtifacts);
            _this.artifacts = returnedArtifacts;
            _this.index++;
            _this.remaining--;
            if (_this.index == (_this.artifacts.length)) {
                localStorage.setItem('judgedArtifacts', JSON.stringify(_this.artifacts));
                _this.router.navigateByUrl('overview');
            }
            _this.currArtifact = _this.artifacts[_this.index];
        });
    };
    JudgementComponent.prototype.getJudgementValue = function () {
        return judgement_1.Judgement[this.currArtifact.Judgement];
    };
    JudgementComponent.prototype.swipe = function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        // next
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.animateJudge(true);
        }
        // previous
        if (action === this.SWIPE_ACTION.LEFT) {
            this.animateJudge(false);
        }
    };
    ////////// Mock Data Methods //////////
    JudgementComponent.prototype.getMockedArtifacts = function () {
        var _this = this;
        this.artifactService.getMockedArtifacts().then(function (artifacts) {
            _this.artifacts = artifacts;
            _this.currArtifact = artifacts[_this.index];
            _this.remaining = artifacts.length;
        });
    };
    JudgementComponent.prototype.getRemainingString = function () {
        var remainingString = String(this.remaining);
        return (this.remaining < 10 ? "0" + remainingString : remainingString);
    };
    return JudgementComponent;
}());
__decorate([
    core_1.ViewChild(modal_component_1.ModalComponent),
    __metadata("design:type", modal_component_1.ModalComponent)
], JudgementComponent.prototype, "modal", void 0);
JudgementComponent = __decorate([
    core_1.Component({
        selector: 'my-judgement-component',
        templateUrl: './judgement.component.html',
        styleUrls: ['./judgement.component.css'],
        animations: [
            animations_1.trigger('fadeInAnimation', [
                animations_1.state('void', animations_1.style({ opacity: 0 })),
                animations_1.state('LIKE', animations_1.style({ opacity: 0 })),
                animations_1.state('DISLIKE', animations_1.style({ opacity: 0 })),
                animations_1.transition('void => NONE', [
                    animations_1.animate(600, animations_1.keyframes([
                        animations_1.style({ opacity: 0 }),
                        animations_1.style({ opacity: 1 })
                    ]))
                ]),
                animations_1.transition('LIKE => NONE', [
                    animations_1.animate(500, animations_1.keyframes([
                        animations_1.style({ opacity: 0 }),
                        animations_1.style({ opacity: 0 }),
                        animations_1.style({ opacity: 0 }),
                        animations_1.style({ opacity: 0 }),
                        animations_1.style({ opacity: 1 }),
                    ]))
                ]),
                animations_1.transition('DISLIKE => NONE', [
                    animations_1.animate(500, animations_1.keyframes([
                        animations_1.style({ opacity: 0 }),
                        animations_1.style({ opacity: 0 }),
                        animations_1.style({ opacity: 0 }),
                        animations_1.style({ opacity: 0 }),
                        animations_1.style({ opacity: 1 }),
                    ]))
                ])
            ]),
            animations_1.trigger('flyOutAnimation', [
                animations_1.transition('NONE => LIKE', [
                    animations_1.animate(400, animations_1.keyframes([
                        animations_1.style({ opacity: 1, transform: 'translate(0%, 0%)' }),
                        animations_1.style({ opacity: 0.5, transform: 'translate(45%, -5%)' }),
                        animations_1.style({ opacity: 0.5, transform: 'translate(85%, -10%)' }),
                        animations_1.style({ opacity: 0, transform: 'translate(100%, -15%)' })
                    ]))
                ]),
                animations_1.transition('NONE => DISLIKE', [
                    animations_1.animate(400, animations_1.keyframes([
                        animations_1.style({ opacity: 1, transform: 'translate(0%, 0%)' }),
                        animations_1.style({ opacity: 0.5, transform: 'translate(-45%, -5%)' }),
                        animations_1.style({ opacity: 0.5, transform: 'translate(-85%, -10%)' }),
                        animations_1.style({ opacity: 0, transform: 'translate(-100%, -15%)' })
                    ]))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router, artifact_service_1.ArtifactService])
], JudgementComponent);
exports.JudgementComponent = JudgementComponent;
//# sourceMappingURL=judgement.component.js.map