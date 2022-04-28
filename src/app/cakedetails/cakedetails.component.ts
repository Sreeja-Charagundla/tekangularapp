import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { strictEqual } from 'assert';
import { SreejaService } from '../Sreeja.service';

@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css']
})
export class CakedetailsComponent implements OnInit {
  cakeid:any 
  cake:any = {}
  isAdding:any = false
  constructor(private route: ActivatedRoute, private service:SreejaService, private router:Router) {
    this.cakeid = this.route.snapshot.params["cakeid"]
    var url = "https://apifromashu.herokuapp.com/api/cake/" + this.cakeid
    this.service.getcakedetails(url).subscribe({
      next:(response:any)=>{
        console.log("response from cakedetails is ",response)
        this.cake = response.data
      },
      error:(error:any)=>{
        console.log("error from cakedetails is",error)
      }
    })
   }
   addtocart(){
     if(localStorage["token"]){
        this.isAdding = true
        let myheader = new HttpHeaders()
        myheader = myheader.append("authtoken",localStorage["token"])
        var url = "https://apifromashu.herokuapp.com/api/addcaketocart"
        var options = {
          headers: myheader
        }
        var body = {
          cakeid: this.cakeid,
          name : this.cake.name,
          weight: this.cake.weight,
          price: this.cake.price,
          image: this.cake.image
        }
        this.service.addtocart(url,body,options).subscribe({
          next:(response:any)=>{
            console.log("response form add to cart is ",response)
            if(response.data){
              this.router.navigate(["/cart"])
            }
          },
          error:(error:any)=>{
            console.log("error from add to cart is ",error)
          }
        })
     }
     else{
       this.service.navigate = "/details/" + this.cakeid.toString()
       this.router.navigate(['/login'])
     }
   }
  ngOnInit(): void {
  }

}
