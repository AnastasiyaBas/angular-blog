import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todos } from 'src/app/modules/interface';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
    todoList: Todos[] = [];
    todos: Todos[] = [];
    todo: Todos;
    showMore: boolean;

    @HostListener('document:click', ['$event'])
    clickedOutside(event){
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.showMore = false;
        }
    }

    constructor( private eRef: ElementRef,
                 private todosService: TodosService,
                 private route: ActivatedRoute) {}

    ngOnInit(): void{
        this.route.params.subscribe(params => {
            this.todosService.todoList.subscribe(todos => {
                if (!todos) {
                    return;
                }
                this.todoList = this.todosService.getTodos(+params.id);
                this.todos = this.todoList;
            });
        });
    }
    viewCompleted(): void{
        this.todos = this.todoList.filter(valueTodos => valueTodos.completed === true);

    }

    viewAll(): void {
        this.todos = this.todoList;
    }

    changeProperty(id: number): void {
        this.todo = this.todoList.find(valueTodos => valueTodos.id === id);
        if (this.todo.completed) {
            this.todo.completed = false;
        } else {
            this.todo.completed = true;
        }
        this.todosService.updateTodo(id);
    }
    delateTodo(id: number): Todos[] {
        const index =  this.todoList.findIndex(valueTodos => valueTodos.id === id);
        this.todosService.delateTodo(id);
        return this.todoList.splice(index, 1);
    }

}
