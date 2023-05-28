import { Component } from '@angular/core';
import Swiper from 'swiper';
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';
import { BehaviorSubject } from "rxjs";
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

@Component({
  selector: 'cor',
  templateUrl: './swiper-component.component.html',
  styleUrls: ['./swiper-component.component.css']
})
export class SwiperComponentComponent {
  swiper!: Swiper;
  ngOnInit() {
    new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }

}
