import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DynamicFormService } from '../../service/dynamic-form.service';
import { MultipleComponent } from './components/multiple/multiple.component';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [
    ButtonModule,
    ToggleButtonModule,
    FormsModule,
    CommonModule,
    MultipleComponent,
  ],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
})
export class PropertiesComponent {
  get selectedOtherPropertyValues(): string {
    const selected = this.dynamicFormService.otherPropertiesValues.find(
      (v) => v.selected
    );

    return selected
      ? selected.value
      : 'Ne possédez pas d’autre bien immobiliers';
  }

  constructor(public dynamicFormService: DynamicFormService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.dynamicFormService.progress = 70;
    }, 10);
  }

  selectOtherPropertiesValue(value: {
    value: string;
    selected: boolean;
  }): void {
    this.dynamicFormService.otherPropertiesValues.forEach(
      (v) => (v.selected = false)
    );
    value.selected = true;
    this.dynamicFormService.hasOtherProperties = false;
    this.dynamicFormService.disabledNextButton = false;
    if (value.value === 'Possédez d’autres bien immobiliers') {
      this.dynamicFormService.hasOtherProperties = true;
      this.dynamicFormService.disabledNextButton = true;
      this.dynamicFormService.propertiesMap.set('Patrimoine 1', new Map());
    }
  }

  addProperty(): void {
    this.dynamicFormService.propertiesMap.set(
      `Patrimoine ${this.dynamicFormService.propertiesMap.size + 1}`,
      new Map()
    );
  }
}
