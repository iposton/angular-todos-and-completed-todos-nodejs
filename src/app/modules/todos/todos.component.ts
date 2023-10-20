import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { TodosService } from '../../services/todos.service'
import { isPlatformBrowser } from '@angular/common'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todos: any
  public isBrowser: boolean;


  constructor(private todosService: TodosService, @Inject(PLATFORM_ID) platformId: string) { 
    this.isBrowser = isPlatformBrowser(platformId)
   }

   public onChange(event: any) {
     console.log(event, 'todo selected')
     let todoID = event.target.value
     this.todos[todoID].completed = true
   }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.todosService.getTodos().subscribe((res: any) => {
        console.log(res, 'todos from server');
        this.todos = res
      })
    } else {
      console.log('Browser not ready yet')
    }
    
  }
}
