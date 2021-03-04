import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NpiDetailsService {

  searchResultObs: Observable<any>;
  errorList: any[]=[];

  constructor(private http : HttpClient) { }

  searchWithParam(formData){
    this.errors = [];
    let params = new HttpParams()
    .set('version','2.1')
    .set('limit','20');
    
    for(let param in formData){
      if(formData[param]!="" && param!="option"){
        params=params.set(param,formData[param]);
      }
    }

    this.searchResultObs = this.http.get("http://localhost:8080/npi/search",{params:params});
  }

  set errors(errs){
    this.errorList = errs;
  }
  
  get errors(){
    return this.errorList;
  }

  getSearchResult(){
    return this.searchResultObs;
  }
}
