import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productURL = 'api/products/products.json';
  
  constructor(private http: HttpClient) {}
  
  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productURL).pipe(
      tap(data => console.log(`All ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts()
      .pipe(
        map((products: IProduct[]) => products.find(p => p.productId === id))
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned status ${err.status}, error message: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

