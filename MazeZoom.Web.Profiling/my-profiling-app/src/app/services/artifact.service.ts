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

    getInitialArtifacts(): Observable<Artifact[]> {
        const url = this.globalUrl + 'api/core/profiling/getall';
        return this.service.getRequest(url);
    }

    getJudgedArtifacts(): Observable<Artifact[]> {
        const url = this.globalUrl + 'api/core/profiling/getjudgedartifacts';
        return this.service.getRequest(url);
    }

    postJudgedArtifact(artifact: Artifact, callback: () => void): void {
        const url = this.globalUrl + 'api/core/profiling/postjudgedartifacts';
        let body = JSON.stringify(artifact);
        console.log(body);
        // this.service.postRequest(url, body).subscribe(result => {
        //     callback();
        // });
    }

    ////////// Mock Data Methods //////////

    getMockedArtifacts(): Promise<Artifact[]> {
        return Promise.resolve(ARTIFACTS);
    }

}