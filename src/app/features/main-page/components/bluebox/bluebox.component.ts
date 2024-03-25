import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-bluebox',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './bluebox.component.html',
  styleUrl: './bluebox.component.scss',
})
export class BlueboxComponent {
  constructor(private router: Router) {}

  public formRedirect(): void {
    this.router.navigate(['/form']);
  }
}
