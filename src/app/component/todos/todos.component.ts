import { Component, OnInit , Input, EventEmitter} from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
   
  todos=  [];
  constructor( private todoservice:TodoService) { }

  ngOnInit(): void {
    this.todoservice.getTodos(5)
  .subscribe(todos=> {
    this.todos=todos;
  });
}
 
  toggleTodo(todo){
   this.todos=this.todos.map(item=>{
     if(todo.id === item.id){
     item.completed = !item.completed;


     this.todoservice.update(todo.id)
     .subscribe(()=>{});}

     return item ;});
 
  }

   deleteTodo(todo){
    this.todos=this.todos.filter(item=>{
     
      return item.id !== todo.id ;
    });
  }

 
  addTodo(todo){
 
    this.todos.push(todo);

  
}}
