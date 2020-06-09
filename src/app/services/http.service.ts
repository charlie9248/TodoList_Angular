import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../../models/todo'



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }


  getTodos = () :Observable<Todo[]> => {
    return this.http.get<Todo[]>(`https://jsonplaceholder.typicode.com/todos?_limit=10`);
  }
}
