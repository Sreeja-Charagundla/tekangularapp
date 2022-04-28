import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcake',
  templateUrl: './addcake.component.html',
  styleUrls: ['./addcake.component.css']
})
export class AddcakeComponent implements OnInit {
  file:any 
  imageUrl:any 
  eggless:any
  flag:any = false
  data:any = {

  }
  getFile(event:any){
    this.file =event.target.files[0]
  }
  getimageurl(){
    var url = "https://apifromashu.herokuapp.com/api/upload"
    var formdata = new FormData()
    formdata.append("file",this.file)
    var myheaders = new HttpHeaders()
    myheaders  = myheaders.append("authtoken",localStorage["token"])
    var options = {
      headers:myheaders
    }
    this.flag = true
    this.http.post(url,formdata,options).subscribe({
      next:(response:any)=>{
        console.log("response from image upload is",response)
        console.log("url is",response.imageUrl)
        this.imageUrl = response.imageUrl
      },
      error:(error)=>{
        console.log("error from upload image is",error)
      }
    })
    
  }
  upload(){
    var url1 = "https://apifromashu.herokuapp.com/api/addcake"
    var myheaders = new HttpHeaders()
    myheaders  = myheaders.append("authtoken",localStorage["token"])
    var options = {
      headers:myheaders
    }
    const ingredients = this.data.ingredients.split(" ")
    var image = "https://www.fnp.com/gift/sweet-tiger-design-cake?gclid=EAIaIQobChMI7eSk5oay9wIVqplmAh0UnQuOEAYYCSABEgLvBfD_BwE"
    var body1 = {
      name: this.data.name,
      price: this.data.price,
      description: this.data.description ,
      ingredients: ['Vanila', 'milk', 'butter', 'granulated sugar'] ,
      image: image,
      type:"Baday special day special",
      weight:1,
      eggless: true
    }
    
    if (this.data.eggless.toLowerCase()=="yes"){
      this.eggless = true
    }
    else{
      this.eggless = false
    }
    console.log("data si ", this.data, ingredients,this.eggless)
    // this.http.post(url1,body1,options).subscribe({
    //   next:(response:any)=>{
    //     console.log("response form upload cake is", response)
    //   },
    //   error:(error)=>{
    //     console.log("error from upload cake ", error)
    //   }
    // })
    
//     url - /addcake
// method -post
// bpdy -- {
//     name,
//     price,
//     description,
//     ingredients:[],
//     image: url coming from server 
//     type,
//     weight
//     eggless
// }
  }
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
