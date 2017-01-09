import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http ,Response} from '@angular/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { TestEntity } from '../testEntity';



@Injectable()
export class TestEntityService{
	private testsUrl = 'http://localhost:8080/api/v1/results/testRun1/tests';
	//private testsUrl = 'http://rest-service.guides.spring.io/greeting';
	constructor(private http: Http) {}



	getTests() : Observable<TestEntity[]> {
		return this.http.get(this.testsUrl)
                    .map((response : Response )=> {
                    	var result = response.json();
                    	//console.log(result);
                    	return result;
                    })
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

}
