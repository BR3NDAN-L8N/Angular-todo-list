import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

    todos: Todo[];

    // constructor is used to import services
    constructor(private todoService: TodoService) { }

    ngOnInit() {
        //  subscribe() works like .then()
        this.todoService.getTodos().subscribe(todos => {
            this.todos = todos;
        });
    }

    //  deleteTodoFromTodos activates from todos.c.html
    deleteTodoFromTodos(todo: Todo) {
        console.log('deleteTodoFromTodos');

        // DELETE FROM UI
        // return all todos that don't have the id of the todo that was selected for deletion
        this.todos = this.todos.filter(thisTodo => thisTodo.id !== todo.id);

        //  DELETE FROM SERVER
        this.todoService.deleteTodo(todo).subscribe();
    }

}
