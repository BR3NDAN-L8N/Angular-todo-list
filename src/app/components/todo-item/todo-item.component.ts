import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

    // @Input inputs the "todo" into the todo-item.html
    //  "todo" of type "Todo", "Todo" gives the data, "Todo" is in ../todos/todos..ts
    @Input() todo: Todo;  //  this "todo" is the [todo]="todosObj" in todos.html

    constructor() { }

    ngOnInit(): void {
    }

}
