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
var artifact_1 = require("../../models/artifact");
var artifact_service_1 = require("../../services/artifact.service");
var JudgementComponent = (function () {
    function JudgementComponent(artifactService) {
        this.artifactService = artifactService;
        this.artifacts = new Array();
        this.index = 0;
    }
    JudgementComponent.prototype.ngOnInit = function () {
        //this.getArtifacts();
        this.getArtifactsApi();
    };
    JudgementComponent.prototype.getArtifacts = function () {
        var _this = this;
        this.artifactService.getArtifacts().then(function (artifacts) { return _this.artifacts = artifacts; })
            .then(function (artifacts) {
            _this.currArtifact = artifacts[_this.index];
            _this.remaining = artifacts.length;
        });
    };
    JudgementComponent.prototype.getArtifactsApi = function () {
        var _this = this;
        this.artifactService.getArtifactsApi().subscribe(function (imgStrings) {
            console.log(imgStrings);
            _this.remaining = imgStrings.length;
            for (var i = 0; i < imgStrings.length; i++) {
                var a = new artifact_1.Artifact(i, imgStrings[i], '');
                _this.artifacts.push(a);
            }
            _this.currArtifact = _this.artifacts[_this.index];
        });
    };
    JudgementComponent.prototype.judge = function (judgement) {
        this.name = this.currArtifact.imgSrc;
        this.currArtifact.value = judgement;
        this.index++;
        this.remaining--;
        this.currArtifact = this.artifacts[this.index];
    };
    return JudgementComponent;
}());
JudgementComponent = __decorate([
    core_1.Component({
        selector: 'my-judgement-component',
        templateUrl: './judgement.component.html',
        styleUrls: ['./judgement.component.css']
    }),
    __metadata("design:paramtypes", [artifact_service_1.ArtifactService])
], JudgementComponent);
exports.JudgementComponent = JudgementComponent;
//# sourceMappingURL=judgement.component.js.map