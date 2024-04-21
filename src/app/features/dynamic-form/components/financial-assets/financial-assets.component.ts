import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DynamicFormService } from '../../service/dynamic-form.service';
import { MultipleComponent } from './multiple/multiple.component';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-financial-assets',
  standalone: true,
  imports: [
    ButtonModule,
    ToggleButtonModule,
    InputTextModule,
    FormsModule,
    CommonModule,
    MultipleComponent,
  ],
  templateUrl: './financial-assets.component.html',
  styleUrl: './financial-assets.component.scss',
})
export class FinancialAssetsComponent {
  get selectedOtherFinancialValues(): string {
    const selected = this.dynamicFormService.otherFinancialValues.find(
      (v) => v.selected
    );

    return selected ? selected.value : 'Possédez d’autres épargnes';
  }

  constructor(public dynamicFormService: DynamicFormService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.dynamicFormService.progress = 90;
      if (
        this.dynamicFormService.currentAccount == null ||
        this.dynamicFormService.currentAccount === 0
      ) {
        this.dynamicFormService.disabledNextButton = true;
      }
    }, 10);
  }

  selectOtherFinancialValue(value: { value: string; selected: boolean }): void {
    this.dynamicFormService.otherFinancialValues.forEach(
      (v) => (v.selected = false)
    );
    value.selected = true;
    this.dynamicFormService.hasOtherFinancialAssets = false;
    this.dynamicFormService.disabledNextButton = false;
    if (value.value === 'Possédez d’autres épargnes') {
      this.dynamicFormService.hasOtherFinancialAssets = true;
      this.dynamicFormService.disabledNextButton = true;
      this.dynamicFormService.financialAssetsMap.set('Épargne 1', new Map());
    }
  }

  addFinancial(): void {
    this.dynamicFormService.financialAssetsMap.set(
      `Épargne ${this.dynamicFormService.financialAssetsMap.size + 1}`,
      new Map()
    );
  }

  public updateCurrentAccount(): void {
    if (
      this.dynamicFormService.currentAccount &&
      this.dynamicFormService.currentAccount !== 0
    ) {
      this.dynamicFormService.disabledNextButton = false;
    } else {
      this.dynamicFormService.disabledNextButton = true;
    }
  }
}
