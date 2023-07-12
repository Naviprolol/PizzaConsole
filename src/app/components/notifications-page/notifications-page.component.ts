import { Component, OnInit } from '@angular/core';
import { ingredients as data } from 'src/app/shared/test-data/ingredients';
import { IIngredient } from 'src/app/shared/interfaces/ingredient.interface';
import { productsInfo } from 'src/app/shared/orders-info';

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.css']
})
export class NotificationsPageComponent implements OnInit {
  products: IIngredient[] = data;
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
