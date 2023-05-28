import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule, NgbRatingConfig, NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
 
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  showNavigationArrows = true;
	showNavigationIndicators = false;
	images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private _http: HttpClient,config: NgbCarouselConfig ){
   
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
  }
  api:string = "https://dummyjson.com/products";


  products:any = []
  uniqueCategories:any=[]

  ngOnInit(): void {
    this.get()
    console.log("1")
   
  };

  get(){
    this._http.get<any>(this.api).subscribe({
      next:(res)=>{
        this.products = res.products
        this.filteredProducts = this.products;
        console.log(this.products)
        this.uniqueCategories = [...new Set(this.products.map((item:any) => item.category))].splice(0,3);
        
        
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err)
      }

    })
  }
  filteredProducts:any;
  filterPost(category:string){
    if(category=='All'){
      this.filteredProducts= this.products;
    }
    else{
    this.filteredProducts = this.products.filter((item: any) => item.category.toLowerCase() == category.toLowerCase());
    }
  }

}
