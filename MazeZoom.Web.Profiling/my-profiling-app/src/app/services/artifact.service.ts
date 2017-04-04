import { Injectable } from '@angular/core';
import { Artifact } from '../models/artifact';
import { ARTIFACTS } from '../data/mock-data';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from "rxjs/Observable";


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArtifactService {

    private globalUrl = 'http://localhost:29409/';
    private headers = new Headers({
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    constructor(private http: Http) { }

    getArtifacts(): Promise<Artifact[]> {
        return Promise.resolve(ARTIFACTS);
    }

    getArtifactsApi(): Observable<Artifact[]> {
        const url = this.globalUrl + 'api/core/profiling/getartifacts';
        return this.http.get(url, {headers: this.headers})
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
}