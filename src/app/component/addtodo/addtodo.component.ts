import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { Todo } from 'src/Models/Todo';



@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  @Output() addEvent= new EventEmitter();

 text:string="";
  constructor() { }

  ngOnInit(): void {
  }
  addTodo(){
    const todo= new Todo (
    this.id,
    this.title,
    false
    );
 this.addEvent.emit(todo);
 this.title="";
}
}
