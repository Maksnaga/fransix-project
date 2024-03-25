import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  constructor(private router: Router) {}

  back(): void {
    this.router.navigate(['/main']);
  }
}
