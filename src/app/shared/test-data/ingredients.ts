import { IIngredient } from "../interfaces/ingredient.interface";

export const ingredients: IIngredient[] = [
  {
    id: 0,
    name: 'Сыр Моцарелла',
    type: 'Сыры',
    volume: 1,
    //latestChange: new Date(2023, 7, 23, 18),
  },
  {
    id: 1,
    name: 'Коробки под пиццу',
    type: 'Прочее',
    volume: 0,
    //latestChange: new Date(2023, 4, 11, 10),
  },
  {
    id: 2,
    name: 'Ветчина',
    type: 'Мясо',
    volume: 31.2,
    //latestChange: new Date(2023, 3, 4, 15),
  },
  {
    id: 3,
    name: 'Оливковое масло',
    type: 'Масла',
    volume: 7.8,
    //latestChange: new Date(2023, 5, 19, 14),
  },
  {
    id: 4,
    name: 'Бекон',
    type: 'Мясо',
    volume: 21.4,
    //latestChange: new Date(2023, 5, 29, 16),
  },
  {
    id: 5,
    name: 'Соус томатный',
    type: 'Соусы',
    volume: 42.1,
    //latestChange: new Date(2023, 6, 27, 8),
  },
]
