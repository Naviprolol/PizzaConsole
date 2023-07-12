import { Component, OnInit } from '@angular/core';
// import { IIngredient } from "../../shared/interfaces/ingredient.interface";
// import { ingredients } from "../../shared/test-data/ingredients";
import { colorByType, ingredientsInfo } from "../../shared/ingredients-info";
import {ConsoleApiService} from "../../services/console-api.service";
import {firstValueFrom} from "rxjs";
import {IngredientDto} from "../../shared/dto/ingredient.dto";


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
  protected ingredients: IngredientDto[] = [];
  protected filteredIngredients: IngredientDto[] = [];

  protected hoveredIngredientId: number = -1;
  protected selectedIngredientId: number = -1;

  constructor(private _consoleApi: ConsoleApiService) {}

  public ngOnInit(): void {
    firstValueFrom(this._consoleApi.getIngredients())
      .then(ingredients => {
        this.ingredients = ingredients;
        this.ingredients.sort((a: IngredientDto, b: IngredientDto) => a.id - b.id);
        this.ingredients.forEach(ingredient => {
          ingredient.imagePath = ingredientsInfo[ingredient.title]['imagePath'];
          ingredient.type = ingredientsInfo[ingredient.title]['type'];
        });

        this.filteredIngredients = this.ingredients;
        this.isLoaded = true;
      });
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
    this.filteredIngredients = this.ingredients.filter(ingredient =>
      (this.selectedType === 'Все типы продуктов' || ingredient.type === this.selectedType)
      && (!filteringById && (this.searchText === '' || ingredient.title.toLowerCase().includes(this.searchText.toLowerCase()))
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

    this._consoleApi.changeIngredientCountByID({ delta_count: volumeChangeAmount, id: ingredientId });

    this.ingredients.filter(ingredient => ingredient.id == ingredientId)[0].count += volumeChangeAmount;
    this.selectedIngredientId = -1;
  }
}
