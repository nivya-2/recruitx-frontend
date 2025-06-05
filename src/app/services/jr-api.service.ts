import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JrApiService {
  private apiUrl = 'https://localhost:7144/api/JobRequisition';

  constructor(private http: HttpClient) {}

  createJobRequisition(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
