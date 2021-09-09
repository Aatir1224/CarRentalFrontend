import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AllservicesService {
  constructor(private http: HttpClient) {}
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  public getAllCars() {
    return this.http.get(environment.apiUrl + 'cars', this.httpOption);
  }
  public getSingleCar(id) {
    return this.http.get(environment.apiUrl + `cars/${id}`, this.httpOption);
  }
  public rentCars(data) {
    return this.http.post(
      environment.apiUrl + 'cars/create/rent',
      data,
      this.httpOption
    );
  }
  public getInvoice(id) {
    return this.http.get(
      environment.apiUrl + `cars/getRentedCars/${id}`,
      this.httpOption
    );
  }
}
