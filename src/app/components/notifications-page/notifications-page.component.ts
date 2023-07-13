import { Component, OnInit } from '@angular/core';
import { IIngredient } from 'src/app/shared/interfaces/ingredient.interface';
import { productsInfo } from 'src/app/shared/orders-info';
import { ConsoleApiService } from 'src/app/services/console-api.service';
import { IngredientDto } from 'src/app/shared/dto/ingredient.dto';
import { ingredientsInfo } from "../../shared/ingredients-info";


@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.css']
})
export class NotificationsPageComponent implements OnInit {
  protected ingredients: IngredientDto[] = [];

  emptyIngredients: IngredientDto[] = [];
  alerts: number[] = [];

  constructor(private api: ConsoleApiService) {

  }

  ngOnInit(): void {

    this.api.getIngredients().subscribe(ingredients => {
      this.ingredients = ingredients
      this.ingredients.forEach(ingredient => {
        ingredient.imagePath = ingredientsInfo[ingredient.title]['imagePath'];
        ingredient.type = ingredientsInfo[ingredient.title]['type'];
      })

      this.api.checkAllIngredientsCount().subscribe(alerts => {
        const alertsString = String(alerts.alerts);
        const alertsArray = alertsString.split(' ').map(Number);

        for (let ingredient of this.ingredients) {
          if (alertsArray.includes(ingredient.id)) {
            this.emptyIngredients.push(ingredient)
          }
        }
      })
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
