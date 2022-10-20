import { Component } from '@angular/core';
import { ItemsDataService } from "../../services/items-data.service";

@Component({
  selector: 'products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {

  products: Array<any>;
  itemsWithOffer: Array<any>;
  itemsWithOutOffer: Array<any>;


  constructor(private httpConfigService: ItemsDataService) {
    this.products = [];
    this.itemsWithOffer = [];
    this.itemsWithOutOffer = [];
    this.getProducts();
  }


  addItemToCart(item: any) {
    this.checkForOffer(item);
  }


  checkForOffer(item: any) {
    let noOfferAmount = 0;
    let offerAmount = 0;
    if (item.activeOffer) {
      offerAmount = this.countAmountForOffer(item);
    } else {
      noOfferAmount = this.countAmountForNoOffer(item);
    }


    const totalAmount = offerAmount + noOfferAmount;

  }


  countAmountForOffer(item: any): number {
    this.itemsWithOffer.push(item);
    const sameIdentifier = this.itemsWithOffer.filter(x => x.identifier === item.identifier);

    let amount = 0;
    if (sameIdentifier.length >= item.quantityOffer) {
      amount = (sameIdentifier.length / item.quantityOffer) * item.priceOffer;
    } else {
      amount = item.standardPrice * sameIdentifier.length;
    }

    return amount;
  }


  countAmountForNoOffer(item: any): number {
    this.itemsWithOutOffer.push(item);
    let amount = 0;
    if (this.itemsWithOutOffer.length) {
      for (let i = 0; i < this.itemsWithOutOffer.length; i++) {
        amount += this.itemsWithOutOffer[i]?.standardPrice;
      }
    }

    return amount
  }


  private getProducts() {
    this.httpConfigService.getItems()
      .subscribe((response: any) => {
        this.products = response.items
      });
  }

}
