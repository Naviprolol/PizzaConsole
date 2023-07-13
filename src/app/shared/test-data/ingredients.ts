import { IngredientDto } from "../dto/ingredient.dto";
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

// export const ingredientsDto: IngredientDto[] = [
//   new IngredientDto(7, 'Коробки под пиццу', 24, 10),
//   new IngredientDto(8, 'Салфетки', 200, 30),
//   new IngredientDto(9, 'Тесто', 14.3, 6),
//   new IngredientDto(10, 'Мука', 35.4, 10),
//   new IngredientDto(11, 'Соус томатный', 7.2, 2),
//   new IngredientDto(14, 'Соус сливочный', 8.5, 2),
//   new IngredientDto(13, 'Сыр Моцарелла', 15.7, 6),
//   new IngredientDto(12, 'Сыр Пармезан', 38.8, 6),
//   new IngredientDto(18, 'Сыр Дор Блю', 18.4, 6),
//   new IngredientDto(16, 'Бекон', 17.4, 8),
//   new IngredientDto(15, 'Ветчина', 43.6, 8),
//   new IngredientDto(19, 'Сервелат', 27.9, 8),
//   new IngredientDto(17, 'Пепперони', 23.0, 8),
//   new IngredientDto(21, 'Курица маринованная', 26.5, 8),
//   new IngredientDto(22, 'Шампиньоны', 16.2, 4),
//   new IngredientDto(23, 'Итальянские травы', 7.4, 2),
//   new IngredientDto(24, 'Томаты', 44.4, 10),
//   new IngredientDto(20, 'Лук зеленый', 12.9, 5),
//   new IngredientDto(25, 'Ананас', 6.4, 2),
//   new IngredientDto(26, 'Оливковое масло', 10.7, 4),
//   new IngredientDto(28, 'Масло чесночное (бокс)', 8.5, 3),
//   new IngredientDto(27, 'Масло перцовое (бокс)', 7.9, 3),
// ];
