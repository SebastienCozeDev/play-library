import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  token_key = "JWT_Token";


  signOut() {
    window.sessionStorage.removeItem(this.token_key);
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    console.log("Saving the token")
    console.log(token)
    window.sessionStorage.removeItem(this.token_key);
    window.sessionStorage.setItem(this.token_key, token);
  }

  public getToken(): string {
    const token = sessionStorage.getItem(this.token_key);
    if (token) {
      return token
    }
    return ''
  }
}
