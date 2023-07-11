import { IOrder } from "../interfaces/order.interface";

export const orders: IOrder[] = [
  {
    id: 12,
    time: new Date(new Date().setHours(16, 48)),
    name: 'Иван',
    surname: 'Иванов',
    tel: '+79000000000',
    sum: 1140,
    status: 'Принят'
  },
  {
    id: 16,
    time: new Date(new Date().setHours(12, 33)),
    name: 'Пётр',
    surname: 'Петров',
    tel: '+79000000000',
    sum: 1000,
    status: 'Отменён'
  },
  {
    id: 13,
    time: new Date(new Date().setHours(11, 25)),
    name: 'Иван',
    surname: 'Петров',
    tel: '+79000000000',
    sum: 1333,
    status: 'Завершён'
  },
  {
    id: 5,
    time: new Date(new Date().setHours(19, 43)),
    name: 'Иван',
    surname: 'Иванов',
    tel: '+79000000000',
    sum: 1140,
    status: 'Принят'
  },
  {
    id: 12,
    time: new Date(new Date().setHours(21, 0)),
    name: 'Иван',
    surname: 'Иванов',
    tel: '+79000000000',
    sum: 1140,
    status: 'Принят'
  },
]
