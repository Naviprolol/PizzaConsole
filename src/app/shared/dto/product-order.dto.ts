export class ProductOrderDto {
  constructor(
    public id: number,
    public id_product: number,
    public id_order: number,
    public count: number,
  ) {}
}
