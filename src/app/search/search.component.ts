import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SreejaService } from '../Sreeja.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchitem:any = []
  constructor(private route:ActivatedRoute,private service:SreejaService) {
    this.route.queryParams.subscribe((query:any)=>{
      var searchtext = query['q']
      var url = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + searchtext
      this.service.searchdetails(url).subscribe({
      next:(response:any)=>{
        console.log("response from search", response)
        this.searchitem = response.data
      },
      error:(error:any)=>{
        console.log("seach error is ", error)
      }
    })
    })
   }

  ngOnInit(): void {
  }

}
