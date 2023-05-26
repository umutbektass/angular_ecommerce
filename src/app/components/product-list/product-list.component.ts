import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private _http: HttpClient){}
  api:string = "https://dummyjson.com/products";
  products:any = []

  ngOnInit(): void {
    this.get()
  
  };

  get(){
    this._http.get<any>(this.api).subscribe({
      next:(res)=>{
        this.products = res.products
        console.log(this.products)
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err)
      }

    })
  }

}
