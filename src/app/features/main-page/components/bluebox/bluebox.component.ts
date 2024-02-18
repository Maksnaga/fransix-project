import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-bluebox',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './bluebox.component.html',
  styleUrl: './bluebox.component.scss'
})
export class BlueboxComponent {

}
