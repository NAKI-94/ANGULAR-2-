import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signal-ejemplo5',
  standalone: true,
  imports: [FormsModule,NgFor,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './signal-ejemplo5.component.html',
  styleUrl: './signal-ejemplo5.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export default class SignalEjemplo5Component {

  todoName="";
  todos: WritableSignal<String[]> = signal ([]);

  addTodo(todo :HTMLInputElement){
    const item= todo.value;
    this.updateTodos(item);
    this.resetAndFocus(todo);
  }

  updateTodos(todo:string){
    this.todos.update((todos)=>[todo,...todos])
  }

  resetAndFocus(todo:HTMLInputElement){
    todo.value ="";
    todo.focus();
  }


}
