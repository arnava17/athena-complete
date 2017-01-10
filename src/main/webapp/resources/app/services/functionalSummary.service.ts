import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http ,Response} from '@angular/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class FunctionalSummaryService{
	private testsUrl = 'http://localhost:8080/api/v1/results/testRun1/functional_summary';
	//private testsUrl = 'http://rest-service.guides.spring.io/greeting';
	constructor(private http: Http) {}

	getFunctionalSummary() : Observable<any> {
		return this.http.get(this.testsUrl)
                    .map(response => response.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}




