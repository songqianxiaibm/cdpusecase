import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Todo } from './todo.interface';
import { Observable } from 'rxjs';

@Injectable()

export class WeatherService {

  constructor(private _http: HttpClient) { }

  dailyForecast(/*searchs:string*/):Observable<Todo[]> {
    //return this._http.get("/api/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22").map(result => result);
    return this._http.get<Todo[]>("/api/zoa-zos-smf110_1-tvt7108.svl.ibm.com-20191008/doc/_search");
  }

}

