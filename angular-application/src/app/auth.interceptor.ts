import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthentificationService} from "./authentification.service";
import {environment} from "./environment";
import {TokenStorageService} from "./token-storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthentificationService, private tokenStorageService: TokenStorageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler):
    Observable<HttpEvent<unknown>> {

    const isApiUrl = request.url.startsWith(environment.apiUrl);
    const jwtToken = this.tokenStorageService.getToken();

    if (isApiUrl && jwtToken) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${jwtToken}` },
      });
    }

    return next.handle(request);
  }
}
