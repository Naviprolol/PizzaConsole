import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ConsoleApiService {
  private readonly serverUrl: string = 'https://pizza-console.onrender.com/api'

  public constructor(private httpClient: HttpClient) {}

  // Address
  public getAddressByID(params: { id: number }): any {
    return this.httpClient.get<any>(`${this.serverUrl}/address/getAddressByID`, {
      params: { ...params }
    });
  }

  public getAddressByUserID(params: { id_user: number }): any {
    return this.httpClient.get<any>(`${this.serverUrl}/address/getAddressByUserID`, {
      params: { ...params }
    });
  }


  // Chefs
  public getAllChefs(): any {
    return this.httpClient.get<any>(`${this.serverUrl}/chefs/getAllChefs`);
  }


  // Couriers
  public getAllCouriers(): any {
    return this.httpClient.get<any>(`${this.serverUrl}/couriers/getAllCouriers`);
  }


  // IngredientProducts
  public getIngredientProductsByIngredientID(params: { id_ingredient: number }): any {
    return this.httpClient.get<any>(`${this.serverUrl}/ingredientProducts/getIngredientProductsByIngredientID`,
      {
        params: { ...params },
      });
  }


  // Ingredients
  public getIngredients(): any {
    return this.httpClient.get<any>(`${this.serverUrl}/ingredients/getIngredients`);
  }

  public changeIngredientCountByID(params: { delta_count: number, id: number }): any {
    return this.httpClient.put<any>(`${this.serverUrl}/ingredients/changeIngredientCountByID`,
      {
        params: { ...params },
      });
  }


  // Orders
  public getAllOrders(): any {
    return this.httpClient.get<any>(`${this.serverUrl}/orders/getAllOrders`);
  }

  public getOrderByID(params: { id: number }): any {
    return this.httpClient.get<any>(`${this.serverUrl}/orders/getOneOrderByID`,
      {
        params: { ...params },
      });
  }

  public changeOrderStatusByID(params: { id: number, status: string }): any {
    return this.httpClient.put<any>(`${this.serverUrl}/orders/changeStatucByID`,
      {
        params: { ...params },
      });
  }


  // ProductOrders
  public getAllProductOrdersByOrderID(params: { id_order: number }): any {
    return this.httpClient.get<any>(`${this.serverUrl}/getAllProductOrdersByOrderID`,
      {
        params: { ...params },
      });
  }

  public getOneProductOrderByOrderIDAndProductID(params: { id_order: number, id_product: number }): any {
    return this.httpClient.get<any>(`${this.serverUrl}/getOneProductOrderByOrderIDAndProductID`,
      {
        params: { ...params },
      });
  }

  public deleteOneProductOrderByOrderIdAndProductID(params: { id_order: number, id_product: number }): any {
    return this.httpClient.delete<any>(`${this.serverUrl}/deleteOneProductOrderByOrderIdAndProductID`,
      {
        params: { ...params },
      });
  }

  public deleteProductOrdersByOrderID(params: { id_order: number }): any {
    return this.httpClient.delete<any>(`${this.serverUrl}/deleteProductOrdersByOrderID`,
      {
        params: { ...params },
      });
  }

  public changeCountByOrderIDAndProductID(params: { id_order: number, id_product: number }): any {
    return this.httpClient.put<any>(`${this.serverUrl}/changeCountByOrderIDAndProductID`,
      {
        params: { ...params },
      });
  }


  // Products
  public getProducts(): any {
    return this.httpClient.get<any>(`${this.serverUrl}/products/getProducts`);
  }

  public getProductByID(params: { id: number }): any {
    return this.httpClient.get<any>(`${this.serverUrl}/products/getProductByID`,
      {
        params: { ...params },
      });
  }

  public changeProductAvailabilityByID(params: { id: number, availability: boolean}): any {
    return this.httpClient.put<any>(`${this.serverUrl}/products/changeProductAvailabilityByID`,
      {
        params: { ...params },
      });
  }


  // Promotions
  public getPromotions(): any {
    return this.httpClient.get<any>(`${this.serverUrl}/promotions/getPromotions`);
  }

  public changePromotionNameByID(params: { id: number, newName: string }): any {
    return this.httpClient.put<any>(`${this.serverUrl}/promotions/changePromotionNameByID`,
      {
        params: { ...params },
      });
  }

  public changePromotionDescriptionByID(params: { id: number, newDescription: string}): any {
    return this.httpClient.put<any>(`${this.serverUrl}/promotions/changePromotionDescriptionByID`,
      {
        params: { ...params },
      });
  }


  // ConsoleUsers
  public registration(params: { first_name: string, surname: string, middle_surname: string,
    phone: number | string, email: string, password: string}): any {
    return this.httpClient.post<any>(`${this.serverUrl}/consoleUsers/registration`,
      {
        params: { ...params },
      });
  }

  public login(params: { email: string, password: string}): any {
    return this.httpClient.post<any>(`${this.serverUrl}/consoleUsers/login`,
      {
        params: { ...params },
      });
  }

  public getUserByID(params: { id: number }): any {
    return this.httpClient.get<any>(`${this.serverUrl}/consoleUsers/getByID`,
      {
        params: { ...params },
      });
  }

  public getUserByPhone(params: { phone: number | string}): any {
    return this.httpClient.get<any>(`${this.serverUrl}/consoleUsers/getByPhone`,
      {
        params: { ...params },
      });
  }

  public getUserByEmail(params: { email: string}): any {
    return this.httpClient.get<any>(`${this.serverUrl}/consoleUsers/getByEmail`,
      {
        params: { ...params },
      });
  }

  public changePhoneByPhone(params: { oldPhone: number | string, newPhone: number | string }): any {
    return this.httpClient.put<any>(`${this.serverUrl}/consoleUsers/changePhoneByPhone`,
      {
        params: { ...params },
      });
  }

  public changeEmailByPhone(params: { phone: number | string, newEmail: string}): any {
    return this.httpClient.put<any>(`${this.serverUrl}/consoleUsers/changeEmailByPhone`,
      {
        params: { ...params },
      });
  }
}
