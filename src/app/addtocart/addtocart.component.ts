import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SreejaService } from '../Sreeja.service';
import { faTrash, faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'; 
import { Router } from '@angular/router';
import { threadId } from 'worker_threads';
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  cartitems:any 
  totalPrice:any = 0
  totalQuantity:any = 0
  fatrash = faTrash
  faplus = faPlusSquare
  faminus = faMinusSquare
  constructor(private service:SreejaService, private route:Router,private http:HttpClient,private loader:NgxUiLoaderService) { 
    var url = "https://apifromashu.herokuapp.com/api/cakecart"
    let myheader = new HttpHeaders()
    myheader = myheader.append("authtoken",localStorage["token"])
    var options = {
      headers: myheader
    }
    var body = {}
    this.service.getcartitems(url,body,options).subscribe({
      next:(response:any)=>{
        console.log("response form cart items is ", response)
        this.cartitems = response.data
        this.service.cakes = response.data
        console.log(this.service.cakes)
        if(this.cartitems){
          for(let x of this.cartitems){
            this.totalPrice += x.price * x.quantity
            console.log(`price ${x.price} and quantity ${x.quantity}`)
            this.totalQuantity += x.quantity
          }
        }
        this.service.totalprice = this.totalPrice
        console.log("cakes",this.service.cakes)
        console.log("price",this.service.totalprice)
      },
      error:(error)=>{
        console.log("error from cart items is  ", error)
      }
    })
    this.service.cartitems = this.cartitems
    
  }

  remove(num:any){
    var cakeid = this.cartitems[num].cakeid
    let myheader = new HttpHeaders()
        myheader = myheader.append("authtoken",localStorage["token"])
        var url = "https://apifromashu.herokuapp.com/api/removeonecakefromcart"
        var options = {
          headers: myheader
        }
        var body = {
          cakeid:cakeid
        }
        this.loader.start()
        this.http.post(url,body,options).subscribe({
          next:(response:any)=>{
            console.log("response form remove one cart is ",response)
            if(response.message){
            this.totalPrice -= this.cartitems[num].price 
            this.cartitems[num].quantity -= 1
            this.totalQuantity -= 1
            }
            this.loader.stop()
          },
          error:(error)=>{
            console.log("error from removecaake is", error)
          }
        })
  }
  add(num:any){
    var url = "https://apifromashu.herokuapp.com/api/addcaketocart"
    let myheader = new HttpHeaders()
    myheader = myheader.append("authtoken",localStorage["token"])
    var options = {
      headers: myheader
    }
    var body = {
        cakeid: this.cartitems[num].cakeid,
        name : this.cartitems[num].name,
        weight: this.cartitems[num].weight,
        price: this.cartitems[num].price,
        image: this.cartitems[num].image
      }
      this.loader.start()
      this.service.addtocart(url,body,options).subscribe({
        next:(response:any)=>{
          
          console.log("response form add to cart is ",response)
          if(response.data){
            this.totalPrice = this.totalPrice + this.cartitems[num].price 
            this.cartitems[num].quantity += 1
            this.totalQuantity += 1
          }
          this.loader.stop()
        },
        error:(error:any)=>{
          console.log("error from add to cart is ",error)
        }
      })
  }
  removecake(num:any){
    var cakeid = this.cartitems[num].cakeid
    let myheader = new HttpHeaders()
        myheader = myheader.append("authtoken",localStorage["token"])
        var url = "https://apifromashu.herokuapp.com/api/removecakefromcart"
        var options = {
          headers: myheader
        }
        var body = {
          cakeid:this.cartitems[num].cakeid
        } 
        this.loader.start()
        this.http.post(url,body,options).subscribe({
          next:(response:any)=>{
            this.loader.stop()
            console.log("response form remove cart is ",response)
            if(response.message == "Removed whole cake  item from cart"){
              this.totalPrice -= this.cartitems[num].quantity*this.cartitems[num].price
              this.cartitems.splice(num,1)
            }
          },
          error:(error)=>{
            console.log("error from removecaake is", error)
          }
        })
        console.log(this.cartitems[num])
  }
  checkout(){
    if(this.cartitems.length>0){
      this.route.navigate(["/checkout"])
    }
    else{
      alert("please adda items to make payment")
      this.route.navigate([""])
    }
  }
  ngOnInit(): void {
    this.loader.start();
        setTimeout(()=>{
            this.loader.stop();
        }, 100);
  }

}
