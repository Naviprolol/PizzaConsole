export class WorkerDto {
  constructor(
    public id: number,
    public first_name: string,
    public salary: number,
    public position?: string,
  ) {}
}
