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
var JudgementComponent = (function () {
    function JudgementComponent(router, artifactService) {
        this.router = router;
        this.artifactService = artifactService;
        this.artifacts = new Array();
        this.index = 0;
    }
    JudgementComponent.prototype.ngOnInit = function () {
        this.getInitialArtifacts();
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
    JudgementComponent.prototype.judge = function (judgement) {
        var _this = this;
        this.currArtifact.Judgement = (judgement ? judgement_1.Judgement.LIKE : judgement_1.Judgement.DISLIKE);
        this.artifacts[this.index] = this.currArtifact;
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
JudgementComponent = __decorate([
    core_1.Component({
        selector: 'my-judgement-component',
        templateUrl: './judgement.component.html',
        styleUrls: ['./judgement.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, artifact_service_1.ArtifactService])
], JudgementComponent);
exports.JudgementComponent = JudgementComponent;
//# sourceMappingURL=judgement.component.js.map