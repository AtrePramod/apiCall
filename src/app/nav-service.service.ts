import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService {
  // https://jsonplaceholder.typicode.com/posts online api link
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'
  private apiUrl1 = 'https://jsonplaceholder.typicode.com/users'
  
  constructor(private http: HttpClient) { }
  getApiData() {
    return this.http.get<any []>(this.apiUrl)
  }
  getApiUser() {
    return this.http.get<any []>(this.apiUrl1)
  }
}
