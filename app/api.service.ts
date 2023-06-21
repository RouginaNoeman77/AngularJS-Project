import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://localhost:7117/api';

constructor(private http: HttpClient) { }

getProperty(Type: string, Area: string, Region: string, Capacity: number) {
  const url = `${this.apiUrl}/Property/FilterProperty`;
  const params = {
    Type,
    Area,
    Region,
    Capacity: Capacity.toString()
  };

  return this.http.get(url, { params });
}}
/*getProperty(propertyDetails: any) {
  const url = `${this.apiUrl}/Property/FilterProperty`;
  return this.http.get(url, { params: propertyDetails });
}*/