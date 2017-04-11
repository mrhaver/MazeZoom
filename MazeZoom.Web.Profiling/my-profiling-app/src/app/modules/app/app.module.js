"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//MODULES
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("../app-routing/app-routing.module");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var animations_1 = require("@angular/platform-browser/animations");
//SERVIES
var in_memory_data_service_1 = require("../../data/in-memory-data.service");
var artifact_service_1 = require("../../services/artifact.service");
//COMPONENTS
var app_component_1 = require("../../components/app/app.component");
var judgement_component_1 = require("../../components/judgement/judgement.component");
var overview_component_1 = require("../../components/overview/overview.component");
var service_service_1 = require("../../services/service.service");
var modal_component_1 = require("../../components/modal/modal.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            judgement_component_1.JudgementComponent,
            overview_component_1.OverviewComponent,
            modal_component_1.ModalComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { passThruUnknownUrl: true }),
        ],
        providers: [artifact_service_1.ArtifactService, service_service_1.GenericService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map