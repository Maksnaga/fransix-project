import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicFormService } from './service/dybamic-form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  constructor(
    private router: Router,
    public dynamicFormService: DynamicFormService
  ) {}

  back(): void {
    this.router.navigate(['/main']);
  }
}
