import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-signal-ejemplo1',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './signal-ejemplo1.component.html',
  styleUrl: './signal-ejemplo1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalEjemplo1Component {
   contador= signal<number>(0);


   incrementarContador(){
    this.contador.update((contador)=> contador +1)
   }

   decrementarContador(){
    this.contador.update((contador)=> contador -1)
   }
}
