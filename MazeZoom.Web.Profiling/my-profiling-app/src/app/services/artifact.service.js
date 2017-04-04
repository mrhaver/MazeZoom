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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
var ArtifactService = (function () {
    function ArtifactService(http) {
        this.http = http;
        this.globalUrl = 'http://localhost:29409/';
        this.headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
    }
    ArtifactService.prototype.getArtifacts = function () {
        return Promise.resolve(mock_data_1.ARTIFACTS);
    };
    ArtifactService.prototype.getArtifactsApi = function () {
        var url = this.globalUrl + 'api/core/profiling/getartifacts';
        return this.http.get(url, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArtifactService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Observable_1.Observable.throw(error.message || error);
    };
    return ArtifactService;
}());
ArtifactService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ArtifactService);
exports.ArtifactService = ArtifactService;
//# sourceMappingURL=artifact.service.js.map