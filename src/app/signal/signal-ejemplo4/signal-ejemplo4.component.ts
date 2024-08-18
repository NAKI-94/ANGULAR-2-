import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signal-ejemplo4',
  standalone: true,
  imports: [FormsModule,MatButtonModule],
  templateUrl: './signal-ejemplo4.component.html',
  styleUrl: './signal-ejemplo4.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export default class SignalEjemplo4Component {
  count =signal(0);
  doublecounter =computed(()=> this.count()+2)
  incrementar (){
    this.count.update(()=> this.count()+1);
  }
  
}
