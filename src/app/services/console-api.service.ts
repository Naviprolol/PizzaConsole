import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {AddressDto} from "../shared/dto/address.dto";
import {WorkerDto} from "../shared/dto/worker.dto";
import {IngredientProductDto} from "../shared/dto/ingredient-product.dto";
import {IngredientDto} from "../shared/dto/ingredient.dto";
import {PutResponseDto} from "../shared/dto/put-response.dto";
import {OrderDto} from "../shared/dto/order.dto";
import {ProductOrderDto} from "../shared/dto/product-order.dto";
import {ProductDto} from "../shared/dto/product.dto";
import {PromotionDto} from "../shared/dto/promotion.dto";
import {UserDto} from "../shared/dto/user.dto";

@Injectable({
  providedIn: 'root',
})
export class ConsoleApiService {
  private readonly _serverUrl: string = 'https://pizza-console.onrender.com/api'

  public constructor(private httpClient: HttpClient) {}

  // СЕРВИС НЕ ПРОТЕСТИРОВАН

  // Address
  public getAddressByID(params: { id: number }): Observable<AddressDto> {
    return this.httpClient.get<AddressDto>(`${this._serverUrl}/address/getAddressByID`, {
      params: { ...params }
    });
  }

  public getAddressByUserID(params: { id_user: number }): Observable<AddressDto> {
    return this.httpClient.get<AddressDto>(`${this._serverUrl}/address/getAddressByUserID`, {
      params: { ...params }
    });
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
    return this.httpClient.get<IngredientProductDto>(
      `${this._serverUrl}/ingredientProducts/getIngredientProductsByIngredientID`,
      {
        params: { ...params },
      });
  }


  // Ingredients
  public getIngredients(): Observable<IngredientDto[]> {
    return this.httpClient.get<IngredientDto[]>(`${this._serverUrl}/ingredients/getIngredients`);
  }

  public changeIngredientCountByID(params: { delta_count: number, id: number }): Observable<PutResponseDto> {
    return this.httpClient.put<PutResponseDto>(`${this._serverUrl}/ingredients/changeIngredientCountByID`,
      {
        params: { ...params },
      });
  }


  // Orders
  public getAllOrders(): Observable<OrderDto[]> {
    return this.httpClient.get<OrderDto[]>(`${this._serverUrl}/orders/getAllOrders`);
  }

  public getOrderByID(params: { id: number }): Observable<OrderDto> {
    return this.httpClient.get<OrderDto>(`${this._serverUrl}/orders/getOneOrderByID`,
      {
        params: { ...params },
      });
  }

  public changeOrderStatusByID(params: { id: number, status: string }): Observable<PutResponseDto> {
    return this.httpClient.put<PutResponseDto>(`${this._serverUrl}/orders/changeStatucByID`,
      {
        params: { ...params },
      });
  }


  // ProductOrders
  public getAllProductOrdersByOrderID(params: { id_order: number }): Observable<ProductOrderDto[]> {
    return this.httpClient.get<ProductOrderDto[]>(`${this._serverUrl}/getAllProductOrdersByOrderID`,
      {
        params: { ...params },
      });
  }

  public getProductOrderByOrderIDAndProductID(params: { id_order: number, id_product: number }): Observable<ProductOrderDto> {
    return this.httpClient.get<ProductOrderDto>(`${this._serverUrl}/getOneProductOrderByOrderIDAndProductID`,
      {
        params: { ...params },
      });
  }

  public deleteProductOrderByOrderIdAndProductID(params: { id_order: number, id_product: number }): Observable<PutResponseDto> {
    return this.httpClient.delete<PutResponseDto>(`${this._serverUrl}/deleteOneProductOrderByOrderIdAndProductID`,
      {
        params: { ...params },
      });
  }

  public deleteProductOrdersByOrderID(params: { id_order: number }): Observable<PutResponseDto> {
    return this.httpClient.delete<PutResponseDto>(`${this._serverUrl}/deleteProductOrdersByOrderID`,
      {
        params: { ...params },
      });
  }

  public changeCountByOrderIDAndProductID(params: { id_order: number, id_product: number }): Observable<PutResponseDto> {
    return this.httpClient.put<PutResponseDto>(`${this._serverUrl}/changeCountByOrderIDAndProductID`,
      {
        params: { ...params },
      });
  }


  // Products
  public getProducts(): Observable<ProductDto[]> {
    return this.httpClient.get<ProductDto[]>(`${this._serverUrl}/products/getProducts`);
  }

  public getProductByID(params: { id: number }): Observable<ProductDto> {
    return this.httpClient.get<ProductDto>(`${this._serverUrl}/products/getProductByID`,
      {
        params: { ...params },
      });
  }

  public changeProductAvailabilityByID(params: { id: number, availability: boolean}): Observable<PutResponseDto> {
    return this.httpClient.put<PutResponseDto>(`${this._serverUrl}/products/changeProductAvailabilityByID`,
      {
        params: { ...params },
      });
  }


  // Promotions
  public getPromotions(): Observable<PromotionDto[]> {
    return this.httpClient.get<PromotionDto[]>(`${this._serverUrl}/promotions/getPromotions`);
  }

  public changePromotionNameByID(params: { id: number, newName: string }): Observable<PutResponseDto> {
    return this.httpClient.put<PutResponseDto>(`${this._serverUrl}/promotions/changePromotionNameByID`,
      {
        params: { ...params },
      });
  }

  public changePromotionDescriptionByID(params: { id: number, newDescription: string}): Observable<PutResponseDto> {
    return this.httpClient.put<PutResponseDto>(`${this._serverUrl}/promotions/changePromotionDescriptionByID`,
      {
        params: { ...params },
      });
  }


  // ConsoleUsers
  public registration(params: { first_name: string, surname: string, middle_surname: string,
    phone: number | string, email: string, password: string}): Observable<{ access_token: string }> {
    return this.httpClient.post<{ access_token: string }>(`${this._serverUrl}/consoleUsers/registration`,
      {
        params: { ...params },
      });
  }

  public login(params: { email: string, password: string}): Observable<{ access_token: string }> {
    return this.httpClient.post<{ access_token: string }>(`${this._serverUrl}/consoleUsers/login`,
      {
        params: { ...params },
      });
  }

  public auth(params: { email: string, password: string}): Observable<{ access_token: string }> {
    return this.httpClient.get<{ access_token: string }>(`${this._serverUrl}/consoleUsers/auth`,
      {
        params: { ...params },
      });
  }

  public getUserByID(params: { id: number }): Observable<UserDto> {
    return this.httpClient.get<UserDto>(`${this._serverUrl}/consoleUsers/getByID`,
      {
        params: { ...params },
      });
  }

  public getUserByPhone(params: { phone: number | string}): Observable<UserDto> {
    return this.httpClient.get<UserDto>(`${this._serverUrl}/consoleUsers/getByPhone`,
      {
        params: { ...params },
      });
  }

  public getUserByEmail(params: { email: string}): Observable<UserDto> {
    return this.httpClient.get<UserDto>(`${this._serverUrl}/consoleUsers/getByEmail`,
      {
        params: { ...params },
      });
  }

  public changePhoneByPhone(params: { oldPhone: number | string, newPhone: number | string }): Observable<UserDto> {
    return this.httpClient.put<UserDto>(`${this._serverUrl}/consoleUsers/changePhoneByPhone`,
      {
        params: { ...params },
      });
  }

  public changeEmailByPhone(params: { phone: number | string, newEmail: string}): Observable<UserDto> {
    return this.httpClient.put<UserDto>(`${this._serverUrl}/consoleUsers/changeEmailByPhone`,
      {
        params: { ...params },
      });
  }
}
