import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicFormService } from './service/dybamic-form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  routes = ['/main', 'form', '/form/family'];
  currentRouteIndex = 1;

  constructor(
    private router: Router,
    public dynamicFormService: DynamicFormService
  ) {}

  next(): void {
    debugger;
    if (this.currentRouteIndex < this.routes.length - 1) {
      this.currentRouteIndex++;
      this.router.navigate([this.routes[this.currentRouteIndex]]);
    }
  }

  back(): void {
    if (this.currentRouteIndex > 0) {
      this.currentRouteIndex--;
      this.router.navigate([this.routes[this.currentRouteIndex]]);
    }
  }
}
