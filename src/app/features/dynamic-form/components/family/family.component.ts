import { Component, OnInit } from '@angular/core';
import { DynamicFormService } from '../../service/dynamic-form.service';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [
    ButtonModule,
    ToggleButtonModule,
    FormsModule,
    CommonModule,
    CalendarModule,
  ],
  templateUrl: './family.component.html',
  styleUrl: './family.component.scss',
})
export class FamilyComponent implements OnInit {
  get selectedFamilyValue(): string {
    const selected = this.dynamicFormService.valuesFamily.find(
      (v) => v.selected
    );
    return selected ? selected.value : 'Célibataire';
  }

  get selectedMarriedValue(): string {
    const selected = this.dynamicFormService.valuesMarried.find(
      (v) => v.selected
    );
    return selected ? selected.value : 'la communauté réduite aux acquêts';
  }

  constructor(public dynamicFormService: DynamicFormService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.dynamicFormService.progress = 20;
      this.dynamicFormService.disabledNextButton.next(!this.isAnySelected());
    }, 10);
  }

  selectFamilyValue(value: { value: string; selected: boolean }): void {
    this.dynamicFormService.valuesFamily.forEach((v) => (v.selected = false));
    value.selected = true;
    this.dynamicFormService.disabledNextButton.next(false);
    this.dynamicFormService.isMarried = false;
    if (value.value === 'Marié') {
      this.dynamicFormService.disabledNextButton.next(true);
      this.dynamicFormService.isMarried = true;
    }
  }

  selectMarriedValue(value: { value: string; selected: boolean }): void {
    this.dynamicFormService.valuesMarried.forEach((v) => (v.selected = false));
    value.selected = true;
    this.dynamicFormService.disabledNextButton.next(false);
  }

  isAnySelected(): boolean {
    return this.dynamicFormService.valuesFamily.some((v) => v.selected);
  }

  resetMarried(): void {
    this.dynamicFormService.marriedBirthday = undefined;
    this.dynamicFormService.disabledNextButton.next(true);
  }

  selectMarriedBirthday() {
    this.dynamicFormService.disabledNextButton.next(false);
  }
}
