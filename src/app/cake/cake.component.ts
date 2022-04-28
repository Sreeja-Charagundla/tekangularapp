import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  // cakedata: any = {
  //   image:"assets/cake1.jpg",
  //   name: "redvelvat",
  //   price: 1000
  // }
  @Input() cakedata:any
  constructor() { 
    
  }
  navigate(){
    
  }

  ngOnInit(): void {
  }

}
//const arraysample: Array<number|string|boolean> = [1,3,4,5,6];
//var arraysample: string[] = ["prathyu","Sreeja"]
//let arraysample:(string|number|boolean)[] = []
// var arraysample:any 
// arraysample.push(12)
// arraysample.push("Sreeja")
// arraysample.push(true)
 