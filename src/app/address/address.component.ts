import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SreejaService } from '../Sreeja.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private service:SreejaService, private route:Router) { }
  userdetails:any = {}
  validate:any = true
  addaddress(){
    alert("valid")
    this.service.address = this.userdetails
    localStorage["name"] = this.userdetails.name
    localStorage["address"] = this.userdetails.address
    localStorage["city"] = this.userdetails.city 
    localStorage["pincode"] = this.userdetails.pincode
    localStorage["phone"] = this.userdetails.phone
    this.route.navigate(["/checkout/payment"])
    console.log(localStorage)
  }
  ngOnInit(): void {
  }

}
