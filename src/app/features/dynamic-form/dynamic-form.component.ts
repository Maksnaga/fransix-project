import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DynamicFormService } from './service/dynamic-form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  routes = ['/main', 'form', '/form/family', '/form/children'];
  currentRouteIndex = 1;

  constructor(
    private router: Router,
    public dynamicFormService: DynamicFormService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        localStorage.setItem('currentRoute', event.urlAfterRedirects);
      }
    });
  }

  ngOnInit(): void {
    const currentRoute = localStorage.getItem('currentRoute');
    if (currentRoute && currentRoute !== '/form') {
      this.router.navigate(['/form']);
    }
  }

  next(): void {
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
