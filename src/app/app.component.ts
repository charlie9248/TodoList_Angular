import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import {Todo} from '../models/todo';







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  todos:Todo[];

  constructor(private http : HttpService ){}
  
  ngOnInit(){
    this.http.getTodos().subscribe(data=>{
       this.todos = data;
       console.log(data)
    },err=>{
      console.log(err.message)
    })
  }


  onDelete = (todo) =>{
    this.todos =  this.todos.filter(item => item.id !== todo.id)
  }

  onSubmit = todo => {
    this.todos = [...this.todos , todo];
  }

}
