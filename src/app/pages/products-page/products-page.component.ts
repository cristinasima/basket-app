import { Component } from '@angular/core';
import { ItemsDataService } from "../../services/items-data.service";

@Component({
  selector: 'products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {

  products: Array<any>;


  constructor(private httpConfigService: ItemsDataService) {
    this.products = [];
    this.getProducts();
  }


  getProducts() {
    this.httpConfigService.getItems()
      .subscribe((response: any) => {
        this.products = response.toDoList
      });
  }

}
