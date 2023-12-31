import { Component } from '@angular/core';
import { NavServiceService } from '../nav-service.service';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent {
  submit = false
  new=false
  apiData: any[] = [];
  apiUser: any[] = [];
  Clear=false
  display() {
    this.submit = false;
    this.new = false;
  }
  fetchData() {
    this.submit = true;
    this.new = false;
    this.fetchApiData();

  }
  constructor(private callApiService: NavServiceService) {}
    ngOnInit(){
      this.fetchApiData();
      
    }
    fetchApiData(){
      this.callApiService.getApiData().subscribe(
        (data: any[])=> {
          this.apiData = data;
        }, (error: any) => {
          console.log('Error fetch API data',error)
    })
    }
  
  display1() {
   this.callApiService.getApiUser().subscribe(
        (data: any[])=> {
          this.apiUser = data;


        }, (error: any) => {
          console.log('Error fetch API data',error)
  })
  }

  new1(){
    this.new = true
    this.submit = false
    this.display1()
       this.Clear = !this.Clear   
  }
  clear() {
    this.Clear = false 
    this.new1()
  }
}


