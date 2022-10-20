import { Component } from '@angular/core';
import { ItemsDataService } from "../../services/items-data.service";

@Component({
  selector: 'products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {

  products: Array<any>;
  cartItems: Array<any>;


  constructor(private httpConfigService: ItemsDataService) {
    this.products = [];
    this.cartItems = [];
    this.getProducts();
  }


  addItemToCart(item: any) {
    this.cartItems.push(item);
  }


  private getProducts() {
    this.httpConfigService.getItems()
      .subscribe((response: any) => {
        this.products = response.items
      });
  }

}
