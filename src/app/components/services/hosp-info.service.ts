import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospInfoService {
  private apiUrl = 'http://localhost:8085/api/hosp';

  constructor(private http: HttpClient) { }

  getHospInfo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search`);
  }

  getHospInfoByStatus(status: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search/${status}`);
  }

  createHospInfo(hospInfo: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, hospInfo);
  }

  // HospInfoService
  updateHospInfo(hospId: any, hospInfo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${hospId}`, hospInfo, { responseType: 'text' });
  }


  getHospInfoById(hospId: number): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/${hospId}`);
  }

  deleteHospital(id: number): Observable<any> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete(url, { responseType: 'text' });
  }

  getStateNames(): string[] {
    // Replace with actual API call to fetch state names
    return ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
  }

}
