import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DynamicFormService } from '../../service/dynamic-form.service';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [ButtonModule, ToggleButtonModule, FormsModule, CommonModule],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss',
})
export class ChildrenComponent {
  public childrenSelected = false;

  get selectedFamilyValue(): string {
    const selected = this.dynamicFormService.valuesChildren.find(
      (v) => v.selected
    );
    return selected ? selected.value : 'N’avez pas d’enfant';
  }

  get selectedDependantChildValue(): string {
    const selected = this.dynamicFormService.valuesDependantChild.find(
      (v) => v.selected
    );
    return selected ? selected.value : 'Aucun enfant à charge';
  }

  constructor(public dynamicFormService: DynamicFormService) {}

  selectChildrenValue(value: { value: string; selected: boolean }): void {
    this.childrenSelected = true;
    this.dynamicFormService.valuesChildren.forEach((v) => (v.selected = false));
    value.selected = true;
  }

  selectDependantChildValue(value: { value: string; selected: boolean }): void {
    this.dynamicFormService.valuesDependantChild.forEach(
      (v) => (v.selected = false)
    );
    value.selected = true;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.dynamicFormService.disabledNextButton = false;
      this.dynamicFormService.progress = 30;
    }, 10);
  }

  resetChild(): void {
    this.childrenSelected = false;
  }
}
