import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, iif, Observable, throwError } from 'rxjs';
import { catchError, filter, map, mergeMap, tap } from 'rxjs/operators';
import { Category } from '../model/category';
import { Contact } from '../model/contact';
import { Product } from '../model/product';
import { Services} from '../model/services';
import { Signin } from '../model/signin';
import { AuthorizationService } from './authentication.service';
import { CommentService } from './comment.service';
import { ContactService } from './contact.service';
import { OrderService } from './order.service';
@Injectable()
export class RestService {
  baseUrl: string = "http://localhost:3500";
  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/products`)
               .pipe(
                 catchError( this.handleError )
               );
  }
  id!: number;
  getProduct():Observable<any>{
    return this.http.get<Product[]>(`${this.baseUrl}/products/${this.id}`)
               .pipe(
                 catchError( this.handleError )
               );
  }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseUrl}/categories`)
               .pipe(catchError( this.handleError ));
  }

  getSaveOrder(order: OrderService): Observable<OrderService>{
    return this.http.post<OrderService>(`${this.baseUrl}/orders`,order)
               .pipe(catchError( this.handleError ));
  }

  getSaveContact(contact: ContactService): Observable<ContactService>{
    return this.http.post<ContactService>(`${this.baseUrl}/contacts`,contact)
           .pipe(catchError( this.handleError ));
  }

  getServices(){
    return this.http.get<Services[]>(`${this.baseUrl}/services`)
           .pipe(catchError( this.handleError ));
  }

  getSaveComments(comments:CommentService){
    return this.http.post<CommentService>(`${this.baseUrl}/comments`,comments)
           .pipe(catchError( this.handleError ));
  }

  getSaveUserInfo(userInfo:AuthorizationService){
    return this.http.post<AuthorizationService>(`${this.baseUrl}/register`,userInfo)
           .pipe(catchError( this.handleError ));
  }

  getUserInfo(){
    return this.http.get<Signin[]>(`${this.baseUrl}/register`)
               .pipe(
                 catchError( this.handleError )
               );
  }

  getProductName(productName:string){
    return this.http.get<Product[]>(`${this.baseUrl}/products`)
           .pipe(
              mergeMap( data=> from(data) ),
              filter(data=> !!data["name"]?.toLowerCase().includes( productName.toLowerCase() ) ),
              map(data=> data)
           )
  }

  handleError(err: HttpErrorResponse){
		let errorMessage = '';
		if(err.error instanceof ErrorEvent){
			errorMessage = 'Bir xeta oldu' + err.error.message
		}else  'Sistem xetasi';

		return throwError( errorMessage );
	}
}
