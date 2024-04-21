import { Component } from '@angular/core';
import { DynamicFormService } from '../../service/dynamic-form.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  selector: 'app-send',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ToggleButtonModule,
  ],
  templateUrl: './send.component.html',
  styleUrl: './send.component.scss',
})
export class SendComponent {
  public contactByPhone = false;

  get selectedContactTypeValues(): string {
    const selected = this.dynamicFormService.contactTypeValues.find(
      (v) => v.selected
    );

    return selected
      ? selected.value
      : 'Être contacté par téléphone par un expert';
  }
  constructor(public dynamicFormService: DynamicFormService) {
    setTimeout(() => {
      this.dynamicFormService.progress = 100;
    }, 10);
  }

  selectContactTypeValue(value: { value: string; selected: boolean }): void {
    this.dynamicFormService.contactTypeValues.forEach(
      (v) => (v.selected = false)
    );
    value.selected = true;
    if (value.value === 'Être contacté par téléphone par un expert') {
      this.contactByPhone = true;
      this.dynamicFormService.disabledNextButton = true;
    }
  }

  public updateUserMail(): void {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (
      this.dynamicFormService.userMail &&
      this.dynamicFormService.userMail.length > 0 &&
      emailRegex.test(this.dynamicFormService.userMail)
    ) {
      this.dynamicFormService.disabledNextButton = false;
    } else {
      this.dynamicFormService.disabledNextButton = true;
    }
  }

  public updateUserPhone(): void {
    const phoneRegex = /^\d{10}$/;

    if (
      this.dynamicFormService.userPhone &&
      this.dynamicFormService.userPhone.length > 0 &&
      phoneRegex.test(this.dynamicFormService.userPhone)
    ) {
      this.dynamicFormService.disabledNextButton = false;
    } else {
      this.dynamicFormService.disabledNextButton = true;
    }
  }
}
