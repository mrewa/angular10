import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Todo } from 'src/Models/Todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo ;
  @Output() toggleEvent = new  EventEmitter;
  @Output() deleteEvent = new  EventEmitter;

  constructor( private todoservice:TodoService){}

  ngOnInit(): void {
  }
toggle(todo){
  this.toggleEvent.emit(todo);
}

delete(todo){
  this.todoservice.Delete(todo.id)
  .subscribe(()=>{});
  this.deleteEvent.emit(todo);
  
}



}