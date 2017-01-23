import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http ,Response} from '@angular/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpGetService{
	constructor(private http: Http) {}
		
	getData(endpoint:string) : Observable<any>{
		return this.http.get(endpoint)
                    .map(response => response.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}