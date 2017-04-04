import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GenericService {

    private getHeaders = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    private postHeaders = new Headers({
        'Content-Type': 'application/json; charset=UTF-8'
    });

    constructor(private http: Http) { }

    public getRequest(url: string): Observable<any> {
        return this.http.get(url, { headers: this.getHeaders })
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    public postRequest(url: string, body: string): Observable<any> {
        return this.http.post(url, body, { headers: this.postHeaders })
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
}