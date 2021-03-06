import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

    //  using type <any> instead of Todo because it doesn't follow the Todo format dictated in the models/Todo.ts, is missing the id which is auto-generated by DB
    @Output() addTodo: EventEmitter<any> = new EventEmitter();

    todoTitle: string;

  constructor() { }

  ngOnInit(): void {
  }
    
    onSubmit() {
        const newTodo = {
            title: this.todoTitle,
            completed: false
        }

        this.addTodo.emit(newTodo);

    }

}
