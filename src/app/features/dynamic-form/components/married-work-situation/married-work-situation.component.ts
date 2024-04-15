import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicFormService } from '../../service/dynamic-form.service';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-married-work-situation',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    CommonModule,
    ToggleButtonModule,
  ],
  templateUrl: './married-work-situation.component.html',
  styleUrl: './married-work-situation.component.scss',
})
export class MarriedWorkSituationComponent {
  get selectedWorkSituationValue(): string {
    const selected = this.dynamicFormService.valuesMarriedWorkSituation.find(
      (v) => v.selected
    );
    return selected ? selected.value : 'Artisan';
  }
  constructor(public dynamicFormService: DynamicFormService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.dynamicFormService.disabledNextButton = true;
      if (
        this.dynamicFormService.marriedWorkName &&
        this.dynamicFormService.marriedWorkName.length > 0
      ) {
        this.dynamicFormService.disabledNextButton = false;
      }
      this.dynamicFormService.progress = 55;
    }, 10);
  }

  selectWorkSituationValue(value: { value: string; selected: boolean }): void {
    this.dynamicFormService.valuesMarriedWorkSituation.forEach(
      (v) => (v.selected = false)
    );
    value.selected = true;
    if (
      this.dynamicFormService.marriedWorkName &&
      this.dynamicFormService.marriedWorkName.length > 0
    ) {
      this.dynamicFormService.disabledNextButton = false;
    } else {
      this.dynamicFormService.disabledNextButton = true;
    }
  }

  public changeWorkName(): void {
    if (
      this.dynamicFormService.marriedWorkName &&
      this.dynamicFormService.marriedWorkName.length > 0
    ) {
      this.dynamicFormService.disabledNextButton = false;
    } else {
      this.dynamicFormService.disabledNextButton = true;
    }
  }
}
