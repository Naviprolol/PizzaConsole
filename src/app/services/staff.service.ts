import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IWorker } from "../shared/interfaces/worker.interface";

@Injectable({
  providedIn: "root"
})
export class StaffService {
  constructor(private http: HttpClient) {

  }

  getAllChefs(): Observable<IWorker[]> {
    return this.http.get<IWorker[]>('https://pizza-console.onrender.com/api/chefs/getAllChefs')
  }

  getAllCouriers(): Observable<IWorker[]> {
    return this.http.get<IWorker[]>('https://pizza-console.onrender.com/api/couriers/getAllCouriers')
  }

  getAllAdmins(): Observable<IWorker[]> {
    return this.http.get<IWorker[]>('https://pizza-console.onrender.com/api/consoleUsers/getAll')
  }

}
