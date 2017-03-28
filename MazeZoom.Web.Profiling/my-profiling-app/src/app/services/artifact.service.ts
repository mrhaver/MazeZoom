import { Injectable } from '@angular/core';
import { Artifact } from '../models/artifact';
import { ARTIFACTS } from '../data/mock-data';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArtifactService {
    getArtifacts(): Promise<Artifact[]> {
        return Promise.resolve(ARTIFACTS);
    }
}