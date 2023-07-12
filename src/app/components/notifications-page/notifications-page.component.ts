import { Component, OnInit } from '@angular/core';
import { products as data } from 'src/app/shared/test-data/products';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { productsInfo } from 'src/app/shared/orders-info';

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.css']
})
export class NotificationsPageComponent implements OnInit {
  products: IProduct[] = data;
  notifications: any[] = [];

  ngOnInit(): void {
    this.products.forEach(product => {
      product.imagePath = productsInfo[product.name]['imagePath'];
    })

    this.outOfIngredients();
  }

  outOfIngredients() {
    for (let product of this.products) {
      if (product.volume < 2) {
        this.notifications.push({
          type: 'out-of-products',
          product: product
        });
      }
    }
  }
}
