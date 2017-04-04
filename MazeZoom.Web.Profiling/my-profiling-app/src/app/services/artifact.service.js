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
var mock_data_1 = require("../data/mock-data");
var service_service_1 = require("./service.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
var ArtifactService = (function () {
    function ArtifactService(service) {
        this.service = service;
        this.globalUrl = 'http://localhost:29409/';
    }
    ArtifactService.prototype.getInitialArtifacts = function () {
        var url = this.globalUrl + 'api/core/profiling/getall';
        return this.service.getRequest(url);
    };
    ArtifactService.prototype.getJudgedArtifacts = function () {
        var url = this.globalUrl + 'api/core/profiling/getjudgedartifacts';
        return this.service.getRequest(url);
    };
    ArtifactService.prototype.postJudgedArtifact = function (artifacts) {
        var url = this.globalUrl + 'api/core/profiling/postjudgedartifacts';
        //let body = JSON.stringify(artifacts);
        var body = JSON.stringify({ 'artifacts': artifacts });
        console.log(body);
        return this.service.postRequest(url, body);
    };
    ////////// Mock Data Methods //////////
    ArtifactService.prototype.getMockedArtifacts = function () {
        return Promise.resolve(mock_data_1.ARTIFACTS);
    };
    return ArtifactService;
}());
ArtifactService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [service_service_1.GenericService])
], ArtifactService);
exports.ArtifactService = ArtifactService;
//# sourceMappingURL=artifact.service.js.map