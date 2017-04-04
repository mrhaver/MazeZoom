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
var OverviewComponent = (function () {
    function OverviewComponent(artifactService) {
        this.artifactService = artifactService;
        this.artifacts = new Array();
    }
    OverviewComponent.prototype.ngOnInit = function () {
        this.getArtifactsOverview();
    };
    // getOverviewArtifactsApi(): void {
    //   this.artifactService.getArtifactsApi().subscribe(artifacts=>{
    //     this.artifacts = artifacts;
    //   });
    // }
    OverviewComponent.prototype.getArtifactsOverview = function () {
        var _this = this;
        this.artifactService.getArtifacts().then(function (artifacts) { return _this.artifacts = artifacts; })
            .then(function (artifacts) {
            _this.artifacts = artifacts;
        });
    };
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    core_1.Component({
        selector: 'my-overview-component',
        templateUrl: './overview.component.html',
        styleUrls: ['./overview.component.css']
    }),
    __metadata("design:paramtypes", [artifact_service_1.ArtifactService])
], OverviewComponent);
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=overview.component.js.map