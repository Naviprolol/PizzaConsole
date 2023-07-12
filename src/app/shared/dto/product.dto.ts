export class ProductDto {
  constructor(
    public id: number,
    public title: string,
    public availability: boolean,
    public description: string,
  ) {}
}
