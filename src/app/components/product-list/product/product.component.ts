import { Component, Input } from '@angular/core';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product:any;
  showNavigationArrows = true;
	showNavigationIndicators = true;
	images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(ratingConfig:NgbRatingConfig){
   
    ratingConfig.readonly=true;

  }
  currentRate =3.14
  ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}
  
  
	
}
