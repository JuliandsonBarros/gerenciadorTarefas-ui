import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Tidy } from '../models/tidy';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TidyService {

  baseUrl = "http://cadastrotarefas/tidy";

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(): Observable<Tidy[]>{
    return this.http.get<Tidy[]>(this.baseUrl);
  }

  delete(id: any): Observable<void>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<void>(url);
  }

  create(tidy: Tidy):Observable<Tidy>{
    return this.http.post<Tidy>(this.baseUrl,tidy);
  }

  message(msg: String): void{
    this.snack.open(`${msg}`, 'OK',{
     horizontalPosition: 'end',
     verticalPosition: 'top',
     duration: 4000 
    });
  }
}
