export class IngredientDto {
  constructor(
    public id: number,
    public title: string,
    public count: number,
    public minimum_count: number,
    public imagePath: string = 'pizza-box',
    public type: string = 'Прочее',
  ) {}
}
