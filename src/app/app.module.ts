import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NaviComponent } from './components/navi/navi.component';
import { CollectionComponent } from './components/collection/collection.component';

// import function to register Swiper custom elements

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product-list/product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperComponentComponent } from './components/swiper-component/swiper-component.component';



@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CollectionComponent,
    ProductListComponent,
    ProductComponent,
    SwiperComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
    
   
   
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
