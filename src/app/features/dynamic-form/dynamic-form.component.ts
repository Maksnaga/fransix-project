import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DynamicFormService } from './service/dynamic-form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  routes = ['/main', 'form', '/form/family', '/form/married', '/form/children'];
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
      if (this.currentRouteIndex == 2 && !this.dynamicFormService.isMarried) {
        this.currentRouteIndex++;
      }
      this.currentRouteIndex++;
      this.router.navigate([this.routes[this.currentRouteIndex]]);
    }
  }

  back(): void {
    if (this.currentRouteIndex > 0) {
      if (this.currentRouteIndex == 4 && !this.dynamicFormService.isMarried) {
        this.currentRouteIndex--;
      }
      this.currentRouteIndex--;
      this.router.navigate([this.routes[this.currentRouteIndex]]);
    }
  }

  disabledNextButton(): boolean {
    if (
      this.dynamicFormService.isMarried &&
      !this.isSpouseInformationComplete() &&
      this.currentRouteIndex == 3
    ) {
      return true;
    }
    return this.dynamicFormService.disabledNextButton.value;
  }

  isSpouseInformationComplete(): boolean {
    for (let key in this.dynamicFormService.spouseInformation) {
      if (
        this.dynamicFormService.spouseInformation[
          key as keyof typeof this.dynamicFormService.spouseInformation
        ] == null ||
        this.dynamicFormService.spouseInformation[
          key as keyof typeof this.dynamicFormService.spouseInformation
        ] === ''
      ) {
        return false;
      }
    }
    this.dynamicFormService.disabledNextButton.next(false);
    return true;
  }
}
