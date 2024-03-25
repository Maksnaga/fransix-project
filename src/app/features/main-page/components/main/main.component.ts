import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TagModule, ButtonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  constructor(private router: Router) {}

  public formRedirect(): void {
    this.router.navigate(['/form']);
  }
}
