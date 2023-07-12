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

  login(email: string, password: string): Observable<{ access_token: string }> {

    const data = {
      email: email,
      password: password
    }

    return this.http.post<{ access_token: string }>('https://pizza-console.onrender.com/api/consoleUsers/login', data).pipe(
      tap(
        (token) => {
          localStorage.setItem('auth-token', token.access_token)
          this.setToken(token.access_token)
          console.log(token.access_token)
        }
      )
    )
  }

  setToken(token: string | null) {
    this.token = token
  }

  getToken(): string {
    return this.token
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  logout() {
    this.setToken(null)
    localStorage.clear()
  }
}
