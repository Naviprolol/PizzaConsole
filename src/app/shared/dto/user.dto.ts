export class UserDto {
  constructor(
    public id: number,
    public hashed_password: string,
    public surname: string,
    public first_name: string,
    public middle_surname: string,
    public email: string,
    public salary: number,
    public jobTitle: string,
    public phone?: string | number,
    public position?: string,
  ) { }
}
