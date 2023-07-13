import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {AddressDto} from "../shared/dto/address.dto";
import {WorkerDto} from "../shared/dto/worker.dto";
import {IngredientProductDto} from "../shared/dto/ingredient-product.dto";
import {IngredientDto} from "../shared/dto/ingredient.dto";
import {OrderDto} from "../shared/dto/order.dto";
import {ProductOrderDto} from "../shared/dto/product-order.dto";
import {ProductDto} from "../shared/dto/product.dto";
import {PromotionDto} from "../shared/dto/promotion.dto";
import {UserDto} from "../shared/dto/user.dto";
import {User2Dto} from "../shared/dto/user2Dto";

@Injectable({
  providedIn: 'root',
})
export class ConsoleApiService {
  private readonly _serverUrl: string = 'https://pizza-console.onrender.com/api'

  public constructor(private httpClient: HttpClient) {}

  // СЕРВИС НЕ ПРОТЕСТИРОВАН

  // Address
  public getAddressByID(params: { id: number }): Observable<AddressDto> {
    return this.httpClient.post<AddressDto>(`${this._serverUrl}/address/getAddressByID`, params);
  }

  public getAddressByUserID(params: { id_user: number }): Observable<AddressDto> {
    return this.httpClient.post<AddressDto>(`${this._serverUrl}/address/getAddressByUserID`, params);
  }


  // Chefs
  public getAllChefs(): Observable<WorkerDto[]> {
    return this.httpClient.get<WorkerDto[]>(`${this._serverUrl}/chefs/getAllChefs`);
  }


  // Couriers
  public getAllCouriers(): Observable<WorkerDto[]> {
    return this.httpClient.get<WorkerDto[]>(`${this._serverUrl}/couriers/getAllCouriers`);
  }


  // IngredientProducts
  public getIngredientProductsByIngredientID(params: { id_ingredient: number }): Observable<IngredientProductDto> {
    return this.httpClient.post<IngredientProductDto>(
      `${this._serverUrl}/ingredientProducts/getIngredientProductsByIngredientID`, params);
  }


  // Ingredients
  public getIngredients(): Observable<IngredientDto[]> {
    return this.httpClient.get<IngredientDto[]>(`${this._serverUrl}/ingredients/getIngredients`);
  }

  public changeIngredientCountByID(params: { delta_count: number, id: number }): Observable<{ string: number[] }> {
    return this.httpClient.put<{ string: number[] }>(`${this._serverUrl}/ingredients/changeIngredientCountByID`, params);
  }

  public createIngredient(params: { title: string, count: number }): Observable<IngredientDto> {
    return this.httpClient.post<IngredientDto>(`${this._serverUrl}/ingredients/createIngredient`, params);
  }

  public changeMinimumCountByID(params: { id: number, minimum_count: number }): Observable<{ string: number[] }> {
    return this.httpClient.put<{ string: number[] }>(`${this._serverUrl}/ingredients/changeMininmumCountByID`, params);
  }

  public checkAllIngredientsCount(): Observable<{ alerts: number }> {
    return this.httpClient.get<{ alerts: number }>(`${this._serverUrl}/ingredients/checkAllIngredientsCount`);
  }


  // Orders
  public getAllOrders(): Observable<OrderDto[]> {
    return this.httpClient.get<OrderDto[]>(`${this._serverUrl}/orders/getAllOrders`);
  }

  public getOrderByID(params: { id: number }): Observable<OrderDto> {
    return this.httpClient.post<OrderDto>(`${this._serverUrl}/orders/getOneOrderByID`, params);
  }

  public changeOrderStatusByID(params: { id: number, status: string }): Observable<{ string: number[] }> {
    return this.httpClient.put<{ string: number[] }>(`${this._serverUrl}/orders/changeStatusByID`, params);
  }


  // ProductOrders
  public getAllProductOrdersByOrderID(params: { id_order: number }): Observable<ProductOrderDto[]> {
    return this.httpClient.post<ProductOrderDto[]>(`${this._serverUrl}/getAllProductOrdersByOrderID`, params);
  }

  public getProductOrderByOrderIDAndProductID(params: { id_order: number, id_product: number }): Observable<ProductOrderDto> {
    return this.httpClient.post<ProductOrderDto>(`${this._serverUrl}/getOneProductOrderByOrderIDAndProductID`, params);
  }

  public deleteProductOrderByOrderIdAndProductID(params: { id_order: number, id_product: number }): Observable<{ string: number[] }> {
    return this.httpClient.delete<{ string: number[] }>(`${this._serverUrl}/deleteOneProductOrderByOrderIdAndProductID`,
      {
        params: { ...params },
      });
  }

  public deleteProductOrdersByOrderID(params: { id_order: number }): Observable<{ string: number[] }> {
    return this.httpClient.delete<{ string: number[] }>(`${this._serverUrl}/deleteProductOrdersByOrderID`,
      {
        params: { ...params },
      });
  }

  public changeCountByOrderIDAndProductID(params: { id_order: number, id_product: number }): Observable<{ string: number[] }> {
    return this.httpClient.put<{ string: number[] }>(`${this._serverUrl}/changeCountByOrderIDAndProductID`, params);
  }


  // Products
  public getProducts(): Observable<ProductDto[]> {
    return this.httpClient.get<ProductDto[]>(`${this._serverUrl}/products/getProducts`);
  }

  public getProductByID(params: { id: number }): Observable<ProductDto> {
    return this.httpClient.post<ProductDto>(`${this._serverUrl}/products/getProductByID`, params);
  }

  public changeProductAvailabilityByID(params: { id: number, availability: boolean}): Observable<{ string: number[] }> {
    return this.httpClient.put<{ string: number[] }>(`${this._serverUrl}/products/changeProductAvailabilityByID`, params);
  }


  // Promotions
  public getPromotions(): Observable<PromotionDto[]> {
    return this.httpClient.get<PromotionDto[]>(`${this._serverUrl}/promotions/getPromotions`);
  }

  public changePromotionNameByID(params: { id: number, newName: string }): Observable<{ string: number[] }> {
    return this.httpClient.put<{ string: number[] }>(`${this._serverUrl}/promotions/changePromotionNameByID`, params);
  }

  public changePromotionDescriptionByID(params: { id: number, newDescription: string}): Observable<{ string: number[] }> {
    return this.httpClient.put<{ string: number[] }>(`${this._serverUrl}/promotions/changePromotionDescriptionByID`, params);
  }


  // ConsoleUsers
  public registration(params: { first_name: string, surname: string, middle_surname: string,
    phone: string | number, email: string, password: string}): Observable<{ access_token: string }> {
    return this.httpClient.post<{ access_token: string }>(`${this._serverUrl}/consoleUsers/registration`, params);
  }

  public login(params: { email: string, password: string}): Observable<{ access_token: string }> {
    return this.httpClient.post<{ access_token: string }>(`${this._serverUrl}/consoleUsers/login`, params);
  }

  public auth(params: { email: string, password: string}): Observable<{ access_token: string }> {
    return this.httpClient.post<{ access_token: string }>(`${this._serverUrl}/consoleUsers/auth`, params);
  }

  public getUserByID(params: { id: number }): Observable<User2Dto> {
    return this.httpClient.post<User2Dto>(`${this._serverUrl}/consoleUsers/getByID`, params);
  }

  public getUserByPhone(params: { phone: string | number }): Observable<User2Dto> {
    return this.httpClient.post<User2Dto>(`${this._serverUrl}/consoleUsers/getByPhone`, params);
  }

  public getUserByEmail(params: { email: string}): Observable<User2Dto> {
    return this.httpClient.post<User2Dto>(`${this._serverUrl}/consoleUsers/getByEmail`, params);
  }

  public getAllUsers(): Observable<UserDto[]> {
    return this.httpClient.get<UserDto[]>(`${this._serverUrl}/consoleUsers/getAll`);
  }


  public changePhoneByPhone(params: { oldPhone: string | number , newPhone: string | number }): Observable<{ string: number[] }> {
    return this.httpClient.put<{ string: number[] }>(`${this._serverUrl}/consoleUsers/changePhoneByPhone`, params);
  }

  public changeEmailByPhone(params: { phone: string | number, newEmail: string}): Observable<{ string: number[] }> {
    return this.httpClient.put<{ string: number[] }>(`${this._serverUrl}/consoleUsers/changeEmailByPhone`, params);
  }

  public changeSalary(params: { id: number, salary: number}): Observable<{ string: number[] }> {
    return this.httpClient.put<{ string: number[] }>(`${this._serverUrl}/consoleUsers/changeSalary`, params);
  }
}
