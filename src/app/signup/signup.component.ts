import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SreejaService } from '../Sreeja.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  userdetails: any = {
    email:"",
    name:"",
    password:""
  }
  users:any = []
  responseError:any
  signupForm:any
  flag = false
  display(){
  


    this.toastr.success('succesfully added')
    // this.toastr.show(this.service.port)
    this.users.push([this.userdetails.name,this.userdetails.email])
    this.flag = true 
      var url="https://apifromashu.herokuapp.com/api/register"
      this.http.post(url,this.userdetails).subscribe({
        next:(response:any)=>{
          console.log("the response of sign up is", response)
          if(response["message"] == "User Already Exists"){
            this.responseError = "inavali user or user already exist";
          }
        },
        error:(error:any)=>{
          console.log("sign up error is",error)
        }
      })
  }
  pop(){
    this.users.pop()
  }
  
  constructor(private toastr: ToastrService, private http:HttpClient, private service:SreejaService, private formbuilder:FormBuilder) {
    // this.signupForm = this.formbuilder.group({
    //   Sreeja:["",[Validators.required, Validators.email]],
    //   Sreeja:["",[Validators.required,Validators.name]],
    //   shyam:["",[Validators.required,Validators.name]]
    // })
      
   }
  ngOnInit(): void {
  }

}
