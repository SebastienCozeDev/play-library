import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable} from "rxjs";
import {TokenStorageService} from "../../token-storage.service";
import {UserRequest} from "../../requests/UserRequest";
import {environment} from "../../environment";
import {UpdateProfileResponse} from "../../responses/UpdateProfileResponse";
import {UpdateProfileRequest} from "../../requests/UpdateProfileRequest";
import {UpdateAvatarProfileRequest} from "../../requests/UpdateAvatarProfileRequest";
import {UpdateAvatarProfileResponse} from "../../responses/UpdateAvatarProfileResponse";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /**
   * API URL.
   *
   * @private
   */
  private static readonly API_URL: string = environment.apiUrl + '/';

  /**
   * API URLs used for get users list.
   *
   * @private
   */
  private static readonly API_URL_DICT: { [key: string]: string } = {
    'profile': UsersService.API_URL + 'profil',
    'update': UsersService.API_URL + 'update',
    'update-profile': UsersService.API_URL + 'updateAvatar',
  };

  currentProfile = Observable<UserRequest>;

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {
  }

  public getUser(id = -1): Observable<UserRequest> {

    const token: string = this.tokenStorageService.getToken();

    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'bearer' + token,
        }
      ),
    };
    if (id === -1)
      return this.http.get<any>(`${UsersService.API_URL_DICT['profile']}`, httpOptions).pipe(
        catchError(err => {
          console.error('HTTP ERROR:', err);
          throw err;
        })
      );
    else
      return this.http.get<any>(`${UsersService.API_URL_DICT['profile']}/${id}`, httpOptions).pipe(

        catchError(err => {
          console.error('HTTP ERROR:', err);
          throw err;
        })
      );
  }

  public updateUser(id: number, data: UpdateProfileRequest): Observable<UpdateProfileResponse> {
    const token: string = this.tokenStorageService.getToken();
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'bearer ' + token,
        },
      ),
    };
    return this.http.put<UpdateProfileResponse>(`${UsersService.API_URL_DICT['update']}/${id}`, data, httpOptions).pipe(
      catchError(err => {
        console.log('HTTP ERROR : ', err);
        throw err;
      })
    );
  }

  public updateAvatarUser(id: number, data: UpdateAvatarProfileRequest): Observable<UpdateAvatarProfileResponse> {
    const token: string = this.tokenStorageService.getToken();
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'bearer ' + token,
        },
      ),
    };
    return this.http.put<UpdateAvatarProfileResponse>(`${UsersService.API_URL_DICT['update-profile']}/${id}`, data, httpOptions).pipe(
      catchError(err => {
        console.log('HTTP ERROR : ', err);
        throw err;
      })
    );
  }
}
