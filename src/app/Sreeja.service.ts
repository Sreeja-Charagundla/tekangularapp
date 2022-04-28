import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SreejaService {
  navigate:any = "/"
  email:any = ""
  cakeid:any
  address:any 
  totalprice:any
  cakes:any 
  cartitems:any
  length:any
  signup(url:any,data:any){
      return this.http.post(url,data)
  }
  login(url:any,data:any){
    return this.http.post(url,data)
  }
  addtocart(url:any,body:any,options:any){
    return this.http.post(url,body,options)
  }
  getcartitems(url:any,body:any,options:any){
    return this.http.post(url,body,options)
  }
  getcakedetails(url:any){
    return this.http.get(url)
  }
  postforpayment(url:any,body:any,options:any){
    return this.http.post(url,body,options)
  }
  getorderdetails(url:any,body:any,options:any){
    return this.http.post(url,body,options)
  }
  getpassword(url:any,body:any){
    return this.http.post(url,body)
  }
  searchdetails(url:any){
    return this.http.get(url)
  }
  ascending(data:any,property:any){
    data.sort((obj1:any,obj2:any)=>{
      return obj1[property] - obj2[property]
    });
    return data
  }
  descending(data:any,property:any){
    data.sort((obj1:any,obj2:any)=>{
      return obj2[property] - obj1[property]
    });
    return data
  }
  port:any = 8080
  constructor(private http:HttpClient) { }
}
