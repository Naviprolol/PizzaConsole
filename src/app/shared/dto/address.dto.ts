export class AddressDto {
  constructor(
    public id: number,
    public id_user: number,
    public address: string,
    public apartment_number: number,
    public entrance: string,
    public floor: number,
    public doorphone: string
  ) {}
}
