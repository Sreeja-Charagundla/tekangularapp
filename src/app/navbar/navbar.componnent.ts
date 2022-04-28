import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { SreejaService } from "../Sreeja.service";
import { faSearch, faCartShopping,faSignOut  } from "@fortawesome/free-solid-svg-icons";
import { HttpHeaders } from "@angular/common/http";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    // providers:[SreejaService]
})
export class NavbarComponent{
    length:any
    flg:any
    constructor(private service: SreejaService, private ngxui: NgxUiLoaderService,private route:Router){
        this.flag = localStorage["token"]?true:false 
         if(this.flag){
            var url = "https://apifromashu.herokuapp.com/api/cakecart"
            var headers = new HttpHeaders()
            headers = headers.append("authtoken",localStorage["token"])
            var body = {}
            var options = {
               headers:headers
            }
            this.service.getcartitems(url,body,options).subscribe({
               next:(response:any)=>{
                  console.log("response from cart items api in navbar", response)
                  this.service.cartitems = response.data
                  this.service.length =  response.data?.length
                  this.length = this.service.length
                  if (this.length==0){
                      this.flg = true 
                  }
                  else{
                      this.flg = false
                  }
               }
            })
         }

    }
    projecttitle:String = "Sreeja's Bakery";
    searchtext: any
    flag:any 
    faSearch:any = faSearch
    faCartShopping:any = faCartShopping
    falogout:any = faSignOut
    search(){
        if(localStorage['token']){
            this.route.navigate(["/search"],{queryParams:{q:this.searchtext}})
        }
        else{
            this.route.navigate(['/login'])
        } 
    }
    logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("loggedinUser")
    }
    isAdmin:any = false
    adminUsers:any =['rajvadluri16@gmail.com']
    ngDoCheck(){
        if(localStorage["token"]){
            this.flag = true
            if(this.adminUsers.includes(localStorage["loggedinUser"])){
                this.isAdmin = true
            }
        }
        else{
            this.flag = false
        }
    }
    ngOnInit(){
        this.ngxui.start();
        setTimeout(()=>{
            this.ngxui.stop();
        }, 100);
        
    }

}