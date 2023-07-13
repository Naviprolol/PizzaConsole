export class User2Dto {
  constructor(
    public user: {
      id: number,
      phone: string | number,
      hashed_password: string,
      surname: string,
      first_name: string,
      middle_surname: string,
      email: string,
      salary: number,
    }
  ) { }
}
