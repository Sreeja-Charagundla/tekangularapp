import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SreejaService } from '../Sreeja.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  orderdata:any
  constructor(private service:SreejaService) {
    var url = "https://apifromashu.herokuapp.com/api/cakeorders"
    let myheader = new HttpHeaders()
    myheader = myheader.append("authtoken",localStorage["token"])
    var options = {
      headers: myheader
    }
    var body = {}
    this.service.getorderdetails(url,body,options).subscribe({
      next:(response:any)=>{
        console.log("response from order details is ",response)
        this.orderdata = response.cakeorders
        for(let x of this.orderdata){
          console.log("data",x.orderid)
        }
      },
      error:(error)=>{
        console.log("error from order details is",error)
      }
    })
   }

  ngOnInit(): void {
  }

}
