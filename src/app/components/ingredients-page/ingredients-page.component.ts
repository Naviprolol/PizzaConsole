import { Component, OnInit } from '@angular/core';
import { IIngredient } from "../../shared/interfaces/ingredient.interface";
import { ingredients } from "../../shared/test-data/ingredients";
import { colorByType, ingredientsInfo } from "../../shared/ingredients-info";


@Component({
  selector: 'app-ingredients-page',
  templateUrl: './ingredients-page.component.html',
  styleUrls: ['./ingredients-page.component.css']
})
export class IngredientsPageComponent implements OnInit {
  protected isDropdownOpen: boolean = false;
  protected isLoaded: boolean = false;

  protected searchText: string = '';
  protected selectedType: string = 'Все типы ингредиентов';

  protected readonly types: string[] = ['Все типы ингредиентов', ...Object.keys(colorByType)];
  protected readonly colorByType: { [key: string]: string } = colorByType;
  protected filteredIngredients: IIngredient[] = [];

  protected hoveredIngredientId: number = -1;
  protected selectedIngredientId: number = -1;

  public ngOnInit(): void {
    // ... запрос на получение информации о продуктах

    ingredients.sort((a: IIngredient, b: IIngredient) => a.id - b.id);
    ingredients.forEach(ingredient => {
      ingredient.imagePath = ingredientsInfo[ingredient.name]['imagePath'];
      // ingredient.type = productsInfo[ingredient.name]['type'];
    });

    this.filteredIngredients = ingredients;
    this.isLoaded = true;
  }

  protected toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  protected toggleType(type: string): void {
    this.selectedType = type;
    this._filterIngredients();
  }

  protected filterByName(): void {
    this._filterIngredients();
  }

  private _filterIngredients(): void {
    const filteringById = this.searchText.match("^[0-9]+$");
    this.filteredIngredients = ingredients.filter(ingredient =>
      (this.selectedType === 'Все типы продуктов' || ingredient.type === this.selectedType)
      && (!filteringById && (this.searchText === '' || ingredient.name.toLowerCase().includes(this.searchText.toLowerCase()))
        || filteringById && Number(this.searchText) === ingredient.id)
    );
  }

  protected rowMouseEnter(ingredientId: number): void {
    if (this.hoveredIngredientId !== ingredientId) {
      this.hoveredIngredientId = ingredientId;
    }
  }

  protected rowMouseLeave(): void {
    this.hoveredIngredientId = -1;
  }

  protected selectIngredient(ingredientId: number): void {
    if (this.selectedIngredientId !== ingredientId) {
      this.selectedIngredientId = ingredientId;
      setTimeout(() => {
        document.getElementById(`volume-${ingredientId}`)?.focus();
      }, 0)
    }
  }

  protected dismissVolumeChange(): void {
    this.selectedIngredientId = -1;
  }

  protected submitVolumeChange(event: any, ingredientId: number): void {
    const volumeChangeAmount = Number(event.target.volume.value);
    ingredients[ingredientId].volume += volumeChangeAmount;

    // ... запрос на обновление объёма продукта

    this.selectedIngredientId = -1;
  }
}
