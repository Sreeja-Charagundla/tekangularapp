import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcakeComponent } from './addcake/addcake.component';
import { AddressComponent } from './address/address.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"search",component:SearchComponent},
  {path:"cakelist",component:CakelistComponent},
  {path:"carousel",component:CarouselComponent},
  {path:"details/:cakeid", component:CakedetailsComponent},
  {path:"forgetpassword",component:ForgotComponent},
  {path:"addcake",component:AddcakeComponent},
  {path:"cart",component:AddtocartComponent},
  {path:"checkout",component:CheckoutComponent, children:[
    {path:"",component:AddressComponent},
    {path:"address",component:AddressComponent},
    {path:"payment",component:PaymentComponent}
  ]},
  {path:"orderdetails",component:OrderdetailsComponent},
  {path:"**",component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
