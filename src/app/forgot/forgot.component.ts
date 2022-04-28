import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SreejaService } from '../Sreeja.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  emailid:any
  message:any
  constructor(private service:SreejaService, private aroute:ActivatedRoute) { 
    // url - /recoverpassword
    // method - post
    // body - {email}
    this.emailid = this.service.email.toString()
    console.log("the email is",this.service.email)
    var url="https://apifromashu.herokuapp.com/api/recoverpassword"
    var body = {
      email:this.emailid
    }
    this.service.getpassword(url,body).subscribe({
      next:(response:any)=>{
        console.log("response from forgetpassword ",response)
        this.message = response.message
      },
      error:(error)=>{
        console.log("error from forget is",error)
      }
    })
  }

  ngOnInit(): void {
  }

}
