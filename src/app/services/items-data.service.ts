import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ItemsDataService {

  totalCartValue: number | undefined;
  private jsonUrl: string;


  constructor(private http: HttpClient) {
    this.jsonUrl = './assets/items.json';
  }


  getItems() {
    return this.http.get<any>(this.jsonUrl);
  }


  setCartValue(value: number) {
    this.totalCartValue = value;
  }

}
