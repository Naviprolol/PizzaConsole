export interface IOrderBD {
  id: number
  status: number
  userId: number
  forDelivery: boolean
  address: string
  chefId: number
  courierId: number
  orderTime: number
  cost: number
}
