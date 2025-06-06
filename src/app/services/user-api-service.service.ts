import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserDetails {
  userId: number;
  employeeId: string;
  name: string;
  jobTitle: string;
  roleTitle: string;
  location: string;
  deliveryUnit: string;
  email: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private readonly baseUrl = 'https://localhost:7144/api/user'; // Adjust this base path as needed

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>(`${this.baseUrl}/`);
  }

  setUserInactive(userId: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/set-inactive/${userId}`, {});
  }

  setUserActive(userId: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/set-active/${userId}`, {});
  }
}
