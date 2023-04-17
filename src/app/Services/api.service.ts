import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  

  constructor(public http: HttpClient) { }


  public url="https://localhost:7180/api/";
    
    async getAll(Controller: string){
      var response:any;
       await this.http.get(this.url+Controller).toPromise().then((res=>{
        response=res;
      }))
      return response;
    }

    async getById(Controller: string, id: number){
      var response:any;
       await this.http.get(this.url+Controller+'/'+id).subscribe((res=>{
        response=res;
      }))
      return response;
    }

    async delete(Controller: string, id: string){
      var response:any;
       await this.http.delete(this.url+Controller+'/'+id).subscribe((res=>{
        response=res;
      }))
    }

    
    async post(Controller: string, body:any){
      var response:any;
      await this.http.post(this.url+Controller, body).subscribe((res=>{
        response=res;
      }))

      return response;
    }

    async put(Controller: string, id:string, body:any){
      var response:any;
      await this.http.post(this.url+Controller+"/"+id, body).subscribe((res=>{
        response=res;
      }))

      return response;
    }


}
