import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { retry } from 'rxjs';
import { SreejaService } from '../Sreeja.service';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {
  cnt:any = 1
  cnt1:any = 1
  constructor(private sortservice: SreejaService, private http:HttpClient) { 
    var url="https://apifromashu.herokuapp.com/api/allcakes"

    this.http.get(url).subscribe({

      next:(response: any)=>{

        console.log("response from all cakes api",response)

        this.cakelist=response.data;
        this.cakelist.splice(4,1)
        this.cakelist.splice(8,1)
        this.cakelist.splice(13,1)
        this.cakelist.splice(33,1)
        this.cakelist.splice(34,3)
        //this.cakelist.splice(43,1)
        //this.cakelist.splice(49,1)
        // this.cakelist.splice(51,1)
        // this.cakelist.splice(53,2)
        // this.cakelist.splice(59,2)
        // this.cakelist.splice(62,1)
        // this.cakelist.splice(71,3)
        
        

      },

      error:(error)=>{

        console.log("Error from all the cakes api",error)

      }

    })
    
  }
  cakelist:any = [
    
  ]
  
  sorta(){
    //console.log(this.cakelist)
    
    
    this.cakelist = this.sortservice.ascending(this.cakelist,"price")
    if(this.cnt==1){
      this.cakelist.splice(0,61)
    }
    this.cnt += 1
    this.sortservice.port = 4200
  }
  sortd(){
    this.cakelist = this.sortservice.descending(this.cakelist,"price")
    if(this.cnt1==1){
      this.cakelist.splice(4,32)
    }
    this.cnt += 1
  }

  ngOnInit(): void {
  }

}
