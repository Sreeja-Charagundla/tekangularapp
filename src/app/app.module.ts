import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.componnent';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CakeComponent } from './cake/cake.component';
import { SignupComponent } from './signup/signup.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AddcakeComponent } from './addcake/addcake.component';
import { ForgotComponent } from './forgot/forgot.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { HighlightDirective } from './highlight.directive';
import { DiscountPipe } from './discount.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';






@NgModule({
  declarations: [
    AppComponent,NavbarComponent, LoginComponent, CarouselComponent, 
    CakeComponent, SignupComponent, CakelistComponent, HomeComponent,
    SearchComponent, AddcakeComponent, ForgotComponent, PagenotfoundComponent, CakedetailsComponent, AddtocartComponent, HighlightDirective, DiscountPipe, CheckoutComponent, AddressComponent, PaymentComponent, OrderdetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
    }),
    HttpClientModule,
    NgxUiLoaderModule,
    RouterModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
