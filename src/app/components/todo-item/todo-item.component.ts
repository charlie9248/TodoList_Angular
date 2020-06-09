import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @Output() onDelete : EventEmitter<Todo> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }


  onComplete = (todo) =>{
    todo.completed = !todo.completed
  }

  deleteItem = (todo) =>{
    this.onDelete.emit(todo);
  }


  setStyles = () =>{
    const divstyle = {
      'set-div' : true,
     'set-line-through' : this.todo.completed 
    }
    return divstyle
  }



}
