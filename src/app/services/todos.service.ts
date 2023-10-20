import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  public todos: any

  constructor(private http: HttpClient) { }

  public createTodos() {
  
  }

  public getTodos() {
    try {
      this.todos = this.http.post('/todos', '')
      return this.todos;
    } catch (e) {
      console.log(e, 'error')
    } 
  }

  public updateTodos() {

  }

  public deleteTodos() {

  }
}
