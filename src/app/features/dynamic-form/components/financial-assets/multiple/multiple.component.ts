import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicFormService } from '../../../service/dynamic-form.service';

@Component({
  selector: 'app-multiple-financial',
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
export class MultipleComponent {
  @Input() name!: string;

  selectedAssuranceType: any;
  amount: any;
  selectedBeneficiary: any;

  assurances = [
    { name: 'Une assurance vie', code: 'av' },
    { name: 'Un livret A', code: 'la' },
    { name: 'Un LDDS', code: 'ldds' },
    { name: 'Un PEL', code: 'pel' },
    { name: 'Un CEL', code: 'cel' },
    { name: 'Un PEA', code: 'pea' },
  ];
  beneficiaries = [
    { name: 'Mon conjoint, à défaut mes enfants', code: 'mc' },
    { name: 'Autres', code: 'au' },
  ];

  constructor(public dynamicFormService: DynamicFormService) {}

  ngOnInit(): void {
    const map = this.dynamicFormService.financialAssetsMap.get(this.name);
    this.selectedAssuranceType = map?.get('assurances');
    this.amount = map?.get('amount');
    this.selectedBeneficiary = map?.get('beneficiaries');
    setTimeout(() => {
      this.isFilled();
      this.dynamicFormService.progress = 95;
    }, 10);
  }

  onAssuranceTypeChange(event: any) {
    this.dynamicFormService.financialAssetsMap
      .get(this.name)
      ?.set('assurances', event.value);
    this.isFilled();
  }

  onBeneficiaryChange(event: any) {
    this.dynamicFormService.financialAssetsMap
      .get(this.name)
      ?.set('beneficiaries', event.value);
    this.isFilled();
  }

  onAmountChange(event: any) {
    this.dynamicFormService.financialAssetsMap
      .get(this.name)
      ?.set('amount', event);
    this.isFilled();
  }

  isFilled(): void {
    this.dynamicFormService.disabledNextButton = false;

    for (let [
      key,
      innerMap,
    ] of this.dynamicFormService.financialAssetsMap.entries()) {
      const assuranceFilled =
        innerMap.has('assurances') && innerMap.get('assurances') !== null;
      const beneficiariesFilled =
        innerMap.has('beneficiaries') && innerMap.get('beneficiaries') !== null;
      const amountFilled =
        innerMap.has('amount') && innerMap.get('amount') !== null;
      if (!(assuranceFilled && beneficiariesFilled && amountFilled)) {
        this.dynamicFormService.disabledNextButton = true;
      }
    }
  }

  removeFinancial(): void {
    this.dynamicFormService.financialAssetsMap.delete(this.name);
    this.dynamicFormService.disabledNextButton = true;
  }
}
