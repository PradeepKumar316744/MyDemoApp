import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CMActioncode } from 'src/app/Models/CMActioncode';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'Application/jason'})
};

@Injectable({
  providedIn: 'root'
})
export class CMActionAPIService {

  postsUrl = 'https://localhost:44362/api/values';

  constructor(private http: HttpClient) { }

  getCMActionCode(): Observable<CMActioncode[]> {
    return this.http.get<CMActioncode[]>(this.postsUrl);
  }
}
