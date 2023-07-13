import { Component, OnInit } from '@angular/core';
import { ingredients as data, ingredients } from 'src/app/shared/test-data/ingredients';
import { IIngredient } from 'src/app/shared/interfaces/ingredient.interface';
import { productsInfo } from 'src/app/shared/orders-info';
import { ConsoleApiService } from 'src/app/services/console-api.service';
import { IngredientDto } from 'src/app/shared/dto/ingredient.dto';

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.css']
})
export class NotificationsPageComponent implements OnInit {
  notifications: any[] = [];
  ingredients: IngredientDto[] = [];

  constructor(private api: ConsoleApiService) {

  }

  ngOnInit(): void {

    this.api.getIngredients().subscribe(ingredients => {
      this.ingredients = ingredients
      console.log(this.ingredients)
    })

    this.outOfIngredients();
  }

  outOfIngredients() {
    // for (let product of this.ingredients) {
    //   if (product.volume < 2) {
    //     this.notifications.push({
    //       type: 'out-of-products',
    //       product: product
    //     });
    //   }
    // }
  }
}
