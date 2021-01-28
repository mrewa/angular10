import { getLocaleExtraDayPeriods } from '@angular/common';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

import { from, Observable } from 'rxjs';
import { Todo } from 'src/Models/Todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( private http:HttpClient) { }


getTodos (limit:number):Observable<Todo[]>{
return this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos?_limit='+ limit);
}

Delete(id:any){
  return this.http.delete<Todo>('https://jsonplaceholder.typicode.com/todos/'+ id);
}

update(todo:Todo){
  return this.http.put('https://jsonplaceholder.typicode.com/todos/'+ todo.id,todo);
}
}