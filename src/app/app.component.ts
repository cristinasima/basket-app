import { Component } from '@angular/core';

import { ItemsDataService } from "./services/items-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basket-app';
  showCart: boolean;
  cartValue: number | undefined;

  constructor(itemService: ItemsDataService) {
    this.showCart = false;
    this.cartValue = itemService.totalCartValue;
  }

}
