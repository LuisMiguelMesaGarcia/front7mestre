import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(public http: HttpClient) { }

  url:"https://localhost:7180/api/"; //no me sirve esta variable
    
    async getAll(Controller: string){
      var response:any;
       await this.http.get("https://localhost:7180/api/"+Controller).toPromise().then((res=>{
        response=res;
      }))
      return response;
    }
}
