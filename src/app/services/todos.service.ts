import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
import { Todos } from '../modules/interface';
import { ApiUrl } from '../modules/enum';

@Injectable({
    providedIn: 'root'
})

export class TodosService{
    todo: Todos;
    todoList: BehaviorSubject<Todos[]> = new BehaviorSubject<Todos[]>([]);
    constructor(private http: HttpClient){
        this.getTodosList();
    }

    getTodosList(): void {
        this.http.get<Todos[]>(`${ApiUrl.BASE}${ApiUrl.TODOS}`, {})
        .subscribe(resolve => this.todoList.next(resolve));

    }

    getTodos(id: number): Todos[] {
        return this.todoList.getValue().filter(valueTodo => valueTodo.userId === id);
    }

    delateTodo(id: number): void {
        this.http.delete(`${ApiUrl.BASE}${ApiUrl.TODOS}/${id}`, {});
    }
    updateTodo(id: number): void {
        this.http.put(`${ApiUrl.BASE}${ApiUrl.TODOS}/${id}`, {});
    }

}
