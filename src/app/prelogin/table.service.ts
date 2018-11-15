import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Data} from './sider/data'; 

@Injectable()
export class TableService {
  private _url:string = 'http://localhost:3000/data';
  constructor(private _http: Http) { }
  gettableData(){
    return this._http.get(this._url)
       .map((response:Response)=>response.json())
  }
}
