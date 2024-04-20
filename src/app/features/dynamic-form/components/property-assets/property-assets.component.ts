import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DynamicFormService } from '../../service/dynamic-form.service';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-property-assets',
  standalone: true,
  imports: [
    ButtonModule,
    ToggleButtonModule,
    FormsModule,
    CommonModule,
    CheckboxModule,
    InputTextModule,
    CalendarModule,
  ],
  templateUrl: './property-assets.component.html',
  styleUrl: './property-assets.component.scss',
})
export class PropertyAssetsComponent {
  get selectedPropertyAssetsValue(): string {
    const selected = this.dynamicFormService.propertyAssetsValues.find(
      (v) => v.selected
    );

    return selected ? selected.value : 'Locataire';
  }

  get selectedPropertyTypeValue(): string {
    const selected = this.dynamicFormService.propertyTypeValues.find(
      (v) => v.selected
    );
    return selected ? selected.value : 'Une maison';
  }

  get selectedEstimateValue(): string {
    const selected = this.dynamicFormService.estimateValues.find(
      (v) => v.selected
    );
    return selected ? selected.value : 'Entre 0 est 250 000€';
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.dynamicFormService.progress = 60;
      this.dynamicFormService.disabledNextButton = true;
    }, 10);
  }

  constructor(public dynamicFormService: DynamicFormService) {}

  public selectPropertyType(): void {
    this.dynamicFormService.propertyTypeIsSelected = true;
    this.dynamicFormService.isOwner = true;
    this.dynamicFormService.estimateIsSelected = false;
    this.dynamicFormService.propertyFormIsCompleted = false;
    this.dynamicFormService.estimateValues.forEach((v) => (v.selected = false));
    this.dynamicFormService.propertyTypeValues.forEach(
      (v) => (v.selected = false)
    );
    this.dynamicFormService.disabledNextButton = true;
  }

  public selectPropertyAssets(): void {
    this.dynamicFormService.propetyOwnerIsSelected = false;
    this.dynamicFormService.isOwner = false;
    this.dynamicFormService.estimateIsSelected = false;
    this.dynamicFormService.propertyTypeIsSelected = false;
    this.dynamicFormService.propertyFormIsCompleted = false;
    this.dynamicFormService.estimateValues.forEach((v) => (v.selected = false));
    this.dynamicFormService.propertyTypeValues.forEach(
      (v) => (v.selected = false)
    );
    this.dynamicFormService.propertyAssetsValues.forEach(
      (v) => (v.selected = false)
    );
    this.dynamicFormService.disabledNextButton = true;
  }

  public selectEstimate(): void {
    this.dynamicFormService.estimateIsSelected = true;
    this.dynamicFormService.propertyTypeIsSelected = false;
    this.dynamicFormService.propertyFormIsCompleted = false;
    this.dynamicFormService.estimateValues.forEach((v) => (v.selected = false));
    this.dynamicFormService.disabledNextButton = true;
  }

  selectPropertyAssetsValue(value: { value: string; selected: boolean }): void {
    this.dynamicFormService.propertyAssetsValues.forEach(
      (v) => (v.selected = false)
    );
    value.selected = true;
    this.dynamicFormService.disabledNextButton = false;
    this.dynamicFormService.isOwner = false;
    if (value.value === 'Propriétaire') {
      this.dynamicFormService.disabledNextButton = true;
      this.dynamicFormService.isOwner = true;
      this.dynamicFormService.propertyTypeIsSelected = true;
    }
  }

  selectPropertyTypeValue(value: { value: string; selected: boolean }): void {
    this.dynamicFormService.propertyTypeValues.forEach(
      (v) => (v.selected = false)
    );
    value.selected = true;
    this.dynamicFormService.estimateIsSelected = true;
    this.dynamicFormService.propertyTypeIsSelected = false;
  }

  selectEstimateValue(value: { value: string; selected: boolean }): void {
    this.dynamicFormService.estimateValues.forEach((v) => (v.selected = false));
    value.selected = true;
    this.dynamicFormService.disabledNextButton = false;
    this.dynamicFormService.propertyFormIsCompleted = true;
  }

  public changeMonthlyPaiement(): void {
    if (
      this.dynamicFormService.creditInProgress &&
      this.dynamicFormService.monthlyPayment &&
      this.dynamicFormService.monthlyPayment !== 0 &&
      this.dynamicFormService.endingPayment
    ) {
      this.dynamicFormService.disabledNextButton = false;
    } else {
      this.dynamicFormService.disabledNextButton = true;
    }
  }

  public changeCreditInProgress(): void {
    if (this.dynamicFormService.creditInProgress) {
      this.dynamicFormService.disabledNextButton = true;
    } else {
      this.dynamicFormService.disabledNextButton = false;
    }
  }
}
