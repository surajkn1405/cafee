import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CafeService {

  constructor(private  http : HttpClient) {}
  
  getData(){
    return this.http.get('https://api.sampleapis.com/coffee/hot ');
  }


}
