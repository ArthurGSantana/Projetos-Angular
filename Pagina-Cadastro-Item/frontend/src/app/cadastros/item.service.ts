import { Item } from './cadastro-item.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl= 'http://localhost:5002/products';

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'my-snack-bar'
    });
  };

  create(item: Item): Observable<Item>{
    return this.http.post<Item>(this.baseUrl, item);
  };

  read(): Observable<Item[]>{
    return this.http.get<Item[]>(this.baseUrl);
  };

  delete(id: string): Observable<Item>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Item>(url);
  }
}
