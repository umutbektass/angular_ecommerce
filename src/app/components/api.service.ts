import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

api:String = "https://dummyjson.com/products"
  // constructor(
  //   private _http : HttpClient
  // ) { }
  // getAllProducts(){
  //   this._http.get<any>(this.api).subscribe({
  //     next:(res)=>{
  //       console.log(res)
  //     },
  //     error:(err:HttpErrorResponse)=>{
  //       console.log(err);
  //     }
  //   })
  // }
}

