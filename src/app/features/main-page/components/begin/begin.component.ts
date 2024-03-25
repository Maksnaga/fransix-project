import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-begin',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './begin.component.html',
  styleUrl: './begin.component.scss',
})
export class BeginComponent {
  constructor(private router: Router) {}

  public formRedirect(): void {
    this.router.navigate(['/form']);
  }
}
