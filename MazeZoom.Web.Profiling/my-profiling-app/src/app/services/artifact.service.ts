import { Injectable } from '@angular/core';
import { Artifact } from '../models/artifact';
import { ARTIFACTS } from '../data/mock-data';
import { Observable } from "rxjs/Observable";
import { GenericService } from "./service.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArtifactService {

    private globalUrl = 'http://localhost:29409/';

    constructor(private service: GenericService) { }

    public getRandomInitialArtifacts():  Observable<Artifact[]> {
        const url = this.globalUrl + 'api/core/profiling/get/random-artifacts';
        return this.service.getRequest(url);
    }

    public getInitialArtifacts(): Observable<Artifact[]> {
        const url = this.globalUrl + 'api/core/profiling/getall';
        return this.service.getRequest(url);
    }

    public getJudgedArtifacts(): Observable<Artifact[]> {
        const url = this.globalUrl + 'api/core/profiling/getallresults';
        return this.service.getRequest(url);
    }

    public postJudgedArtifact(artifacts: Artifact[]): Observable<Artifact[]> {
        const url = this.globalUrl + 'api/core/profiling/postjudge';
        //let body = JSON.stringify(artifacts);
        let body = JSON.stringify({ 'artifacts' : artifacts });
        console.log(body);
        return this.service.postRequest(url, body);
    }

    ////////// Mock Data Methods //////////

    public getMockedArtifacts(): Promise<Artifact[]> {
        return Promise.resolve(ARTIFACTS);
    }

}