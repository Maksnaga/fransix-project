import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicFormService } from 'src/app/features/dynamic-form/service/dynamic-form.service';

@Component({
  selector: 'app-multiple-properties',
  standalone: true,
  imports: [
    DropdownModule,
    FormsModule,
    CommonModule,
    CheckboxModule,
    InputTextModule,
    CalendarModule,
  ],
  templateUrl: './multiple.component.html',
  styleUrl: './multiple.component.scss',
})
export class MultipleComponent implements OnInit {
  @Input() name!: string;

  creditInProgress = false;
  rentInProgress = false;
  monthlyPaiement: number | undefined;
  endingPaiement: Date | undefined;
  rentValue: number | undefined;

  selectedProperty: any;
  selectedType: any;
  selectedSuperficy: any;
  selectedValue: any;
  properties = [
    { name: 'Une résidence secondaire', code: 'rn' },
    { name: 'Un bien locatif', code: 'bl' },
  ];
  types = [
    { name: 'Une maison', code: 'm' },
    { name: 'Un appartement', code: 'a' },
  ];
  superficy = [
    { name: 'Entre 0 et 100m2', code: '0' },
    { name: 'Entre 100 et 200m2', code: '1' },
    { name: 'Entre 200 et 300m2', code: '2' },
    { name: 'Entre 300 et 400m2', code: '3' },
    { name: 'Entre 400 et 500m2', code: '4' },
    { name: 'Plus de 500m2', code: '5' },
  ];
  value = [
    { name: 'Entre 0 est 250 000€', code: '0' },
    { name: 'Entre 250 000 est 500 000€', code: '1' },
    { name: 'Entre 500 000 est 750 000€', code: '2' },
    { name: 'Entre 750 000 est 1 000 000€', code: '3' },
    { name: 'Plus de 1 000 000€', code: '4' },
  ];

  constructor(public dynamicFormService: DynamicFormService) {}

  ngOnInit(): void {
    const map = this.dynamicFormService.propertiesMap.get(this.name);
    this.selectedProperty = map?.get('properties');
    this.selectedType = map?.get('types');
    this.selectedSuperficy = map?.get('superficy');
    this.selectedValue = map?.get('value');
    setTimeout(() => {
      this.isFilled();
      this.dynamicFormService.progress = 75;
    }, 10);
    this.creditInProgress = this.dynamicFormService.creditPropertiesMap.has(
      this.name
    );
    this.rentInProgress = this.dynamicFormService.rentPropertiesMap.has(
      this.name
    );
    this.monthlyPaiement = this.dynamicFormService.creditPropertiesMap.get(
      this.name
    )?.value;
    this.endingPaiement = this.dynamicFormService.creditPropertiesMap.get(
      this.name
    )?.ending;
    this.rentValue = this.dynamicFormService.rentPropertiesMap.get(this.name);
  }

  changeCreditInProgress(): void {
    this.dynamicFormService.creditPropertiesMap.set(this.name, {
      value: undefined,
      ending: undefined,
    });
  }

  changeRentInProgress(): void {
    this.dynamicFormService.rentPropertiesMap.set(this.name, undefined);
  }

  onPropertyChange(event: any) {
    this.dynamicFormService.propertiesMap
      .get(this.name)
      ?.set('properties', event.value);
    this.isFilled();
  }

  onTypeChange(event: any) {
    this.dynamicFormService.propertiesMap
      .get(this.name)
      ?.set('types', event.value);
    this.isFilled();
  }

  onSuperficyChange(event: any) {
    this.dynamicFormService.propertiesMap
      .get(this.name)
      ?.set('superficy', event.value);
    this.isFilled();
  }

  onValueChange(event: any) {
    this.dynamicFormService.propertiesMap
      .get(this.name)
      ?.set('value', event.value);
    this.isFilled();
  }

  updateCreditPropertiesMap(): void {
    this.dynamicFormService.creditPropertiesMap.set(this.name, {
      value: this.monthlyPaiement,
      ending: this.endingPaiement,
    });
  }

  updateRentValue(): void {
    this.dynamicFormService.rentPropertiesMap.set(this.name, this.rentValue);
  }

  removeProperty(): void {
    this.dynamicFormService.propertiesMap.delete(this.name);
    this.dynamicFormService.creditPropertiesMap.delete(this.name);
    this.dynamicFormService.rentPropertiesMap.delete(this.name);
    this.dynamicFormService.disabledNextButton = true;
  }

  isFilled(): void {
    this.dynamicFormService.disabledNextButton = false;

    for (let [
      key,
      innerMap,
    ] of this.dynamicFormService.propertiesMap.entries()) {
      const propertiesFilled =
        innerMap.has('properties') && innerMap.get('properties') !== null;
      const typesFilled =
        innerMap.has('types') && innerMap.get('types') !== null;
      const superficyFilled =
        innerMap.has('superficy') && innerMap.get('superficy') !== null;
      const valueFilled =
        innerMap.has('value') && innerMap.get('value') !== null;

      if (
        !(propertiesFilled && typesFilled && superficyFilled && valueFilled)
      ) {
        this.dynamicFormService.disabledNextButton = true;
      }
    }
  }
}
