import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpProcessorService {

  constructor(private http:HttpClient) { }

  fetchApi(url:string):Observable<any>{
    return this.http.get('url');
  }
}
