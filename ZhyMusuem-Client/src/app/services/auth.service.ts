import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user.model';
import { Role } from '../models/Role.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUserSubject = new BehaviorSubject<any>(null); // initializing with no user object since logged out

  readonly API_URL = 'http://localhost:8001/zhyMuseum';

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    // Get the token from the local storage
    const token: string | null = localStorage.getItem('authToken');
    // If not exist return false
    return token !== null;
  }

  authenticate(): Observable<any> {
    // Get the token from the local storage
    const storedToken: string | null = localStorage.getItem('authToken');

    if (storedToken === null) {
      throw null;
    }

    // Create the Authorization header
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${storedToken}`
      })
    };

    // Get logged user information
    return this.http.get<User>(`${this.API_URL}/auth/verify`, options);

  }

  register(name: string, email: string, password: string): Observable<any> {

    // const user: User = new User(
    //   null,
    //   name,
    //   email,
    //   password,
    //   Role.ARTLOVER
    // );

    const user: Object = {
      username: name,
      email:email,
      password: password,
      role: Role.ARTLOVER
    }

    // Register a new user
    return this.http.post(`${this.API_URL}/auth/signup`, user, {responseType: 'text'});

  }

  login(username: string, password: string): Observable<any> {

    const body : Object = {
      username: username,
      password: password
    };
    console.log(body);
    // Check credentials in the server
    return this.http.post(`${this.API_URL}/auth/login`, body, {responseType: 'text'})
    // .pipe(
    //   tap((response: any) => {
    //     // Save token and user information to local storage
    //     localStorage.setItem('authToken', response.token);
    //     // localStorage.setItem('currentUser', JSON.stringify(response.user));
    //     // Notify subscribers about the login status
    //     // this.currentUserSubject.next(response.user);
    //   })
    // );

}

logout(): void {
  // Remove the token and the user information from local storage to log the user out
  localStorage.removeItem('authToken');
  localStorage.removeItem('currentUser');
  // Notify subscribers about the logout
  this.currentUserSubject.next(null);
}
 
 
verifToken(): Observable<User> {
  const storedToken: string | null = localStorage.getItem('currentUser');

  if (storedToken === null){
    throw null;
  }

  // create authurized header
  const options = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${storedToken}`
    })
  };

  const url = `${this.API_URL}/verify`;
  return this.http.get<User>(url, options);
}

}