export interface IProduct {
  id: number,
  imagePath?: string,
  name: string,
  type: string,
  volume: number,
  latestChange: Date | string,
}
