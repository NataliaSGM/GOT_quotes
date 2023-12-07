import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private baseUrl = 'https://api.gameofthronesquotes.xyz/v1/author/';

  constructor(private http: HttpClient) { }

  getDetails(slug: string): Observable<any> {
    const url = `${this.baseUrl}${slug}`;
    return this.http.get<any>(url);
  }
}