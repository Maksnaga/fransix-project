import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DynamicFormService } from '../../service/dynamic-form.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-assets',
  standalone: true,
  imports: [ButtonModule, ToggleButtonModule, FormsModule, CommonModule],
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

  get selectedSurfaceValue(): string {
    const selected = this.dynamicFormService.surfaceValues.find(
      (v) => v.selected
    );
    return selected ? selected.value : 'Entre 0 et 100m2';
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
    }, 10);
  }

  constructor(public dynamicFormService: DynamicFormService) {}

  public selectPropertyType(): void {
    this.dynamicFormService.propertyTypeIsSelected = true;
    this.dynamicFormService.isOwner = true;
    this.dynamicFormService.surfaceIsSelected = false;
    this.dynamicFormService.estimateIsSelected = false;
  }

  public selectSurface(): void {
    this.dynamicFormService.surfaceIsSelected = true;
    this.dynamicFormService.estimateIsSelected = false;
    this.dynamicFormService.propertyTypeIsSelected = false;
  }

  public selectEstimate(): void {
    this.dynamicFormService.surfaceIsSelected = false;
    this.dynamicFormService.estimateIsSelected = true;
    this.dynamicFormService.propertyTypeIsSelected = false;
  }

  public selectPropertyAssets(): void {
    this.dynamicFormService.propetyOwnerIsSelected = false;
    this.dynamicFormService.isOwner = false;
    this.dynamicFormService.propertyTypeIsSelected = false;
    this.dynamicFormService.surfaceIsSelected = false;
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
    this.dynamicFormService.surfaceIsSelected = true;
    this.dynamicFormService.propertyTypeIsSelected = false;
    this.dynamicFormService.estimateIsSelected = false;
  }

  selectSurfaceValue(value: { value: string; selected: boolean }): void {
    this.dynamicFormService.surfaceValues.forEach((v) => (v.selected = false));
    value.selected = true;
    this.dynamicFormService.surfaceIsSelected = false;
    this.dynamicFormService.estimateIsSelected = true;
    this.dynamicFormService.propertyTypeIsSelected = false;
  }

  selectEstimateValue(value: { value: string; selected: boolean }): void {
    this.dynamicFormService.estimateValues.forEach((v) => (v.selected = false));
    value.selected = true;
    this.dynamicFormService.disabledNextButton = false;
  }
}
