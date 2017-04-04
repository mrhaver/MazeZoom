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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
var GenericService = (function () {
    function GenericService(http) {
        this.http = http;
        this.getHeaders = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        this.postHeaders = new http_1.Headers({
            'Content-Type': 'application/json; charset=UTF-8'
        });
    }
    GenericService.prototype.getRequest = function (url) {
        return this.http.get(url, { headers: this.getHeaders })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    GenericService.prototype.postRequest = function (url, body) {
        return this.http.post(url, body, { headers: this.postHeaders })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    GenericService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Observable_1.Observable.throw(error.message || error);
    };
    return GenericService;
}());
GenericService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GenericService);
exports.GenericService = GenericService;
//# sourceMappingURL=service.service.js.map