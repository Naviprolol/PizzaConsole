export class OrderDto {
  constructor(
    public id: number,
    public status: string,
    public id_user: number,
    public delivery: boolean,
    public address: string,
    public id_chef: number,
    public id_couriers: number,
    public orderTime: number,
    public cost: number,
    public created_at: Date | string,
    public update_at: Date | string,
  ) {}
}
