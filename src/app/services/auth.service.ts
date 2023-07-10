import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { tap } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | any = null

  constructor(private http: HttpClient) {

  }

  // login(email: string, password: string): Observable<{ access_token: string }> {


  // }
}
