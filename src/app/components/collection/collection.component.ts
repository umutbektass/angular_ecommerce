import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {
  products: any = [];
  slicedArray: any[] = this.products.slice(0, 5);
  constructor(private _http: HttpClient) { }
  ngOnInit(): void {
    this.getAllProducts()
  
  };
  updateSlicedArray() {
    this.slicedArray = this.products.slice(0, 5);
    console.log(this.slicedArray);
  }
  getAllProducts() {
    this._http.get<any>("https://dummyjson.com/products").subscribe({
      next: (res) => {
        this.products = res.products
        this.updateSlicedArray();
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }
}
