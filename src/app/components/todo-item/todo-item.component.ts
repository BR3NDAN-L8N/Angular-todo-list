import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from 'src/app/models/Todo';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

    // @Input is the stuff coming in
    @Input() todo: Todo;  //  this "todo" is the [todo]="todosObj" in todos..html

    // @Output is the stuff going out
    @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();  //  bubbles up to todos.c.html, comes from OnDelete below

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
    }

    //  SET DYNAMIC CLASSES in todo-item..html
    setClasses() {
        let classes = {
            todo: true,
            'is-complete': this.todo.completed
        }
        return classes;
    }

    onToggle(todo) {
        console.log('toggle');
        // toggle UI
        todo.completed = !todo.completed;
        // toggle on server
        this.todoService.toggleCompleted(todo).subscribe(todo => {
            console.log(todo);
            
        })
    }

    onDelete(todo) {
        console.log('delete');
        this.deleteTodo.emit(todo);  //  this goes to @Output above, comes from todo-item.c.html

    }
}
