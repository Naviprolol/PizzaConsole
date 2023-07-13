export class WorkerDto {
  constructor(
    public id: number,
    public first_name: string,
    public salary: number,
    public jobTitle: string,
    public surname?: string,
    public photo?: string,
    public phone?: string | number,
  ) { }
}
