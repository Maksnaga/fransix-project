import { Component } from '@angular/core';
import { DynamicFormService } from '../../service/dynamic-form.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { EmailService } from 'src/app/service/mail.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ToggleButtonModule,
    ToastModule,
  ],
  providers: [EmailService, MessageService],
  templateUrl: './send.component.html',
  styleUrl: './send.component.scss',
})
export class SendComponent {
  public contactByPhone = false;
  public emailError = '';
  public phoneError = '';

  get selectedContactTypeValues(): string {
    const selected = this.dynamicFormService.contactTypeValues.find(
      (v) => v.selected
    );

    return selected
      ? selected.value
      : 'Être contacté par téléphone par un expert';
  }
  constructor(
    public dynamicFormService: DynamicFormService,
    private emailService: EmailService,
    private messageService: MessageService,
    private router: Router
  ) {
    setTimeout(() => {
      this.dynamicFormService.progress = 100;
    }, 10);
  }

  selectContactTypeValue(value: { value: string; selected: boolean }): void {
    this.dynamicFormService.contactTypeValues.forEach(
      (v) => (v.selected = false)
    );
    value.selected = true;
    this.contactByPhone = false;
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
      this.emailError = '';
    } else {
      this.dynamicFormService.disabledNextButton = true;
      this.emailError = "L'email saisie est invalide";
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
      this.phoneError = '';
    } else {
      this.dynamicFormService.disabledNextButton = true;
      this.phoneError = 'Le numéro de telephone est invalide';
    }
  }

  public send(): void {
    this.messageService.add({
      key: 'bc',
      severity: 'success',
      summary: 'Success',
      detail: "Votre demande d'expertise a été envoyée avec succès",
    });
    setTimeout(() => {
      this.router.navigate(['/main']);
    }, 1000);
    // this.emailService.sendEmail({}).then(
    //   (response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //   },
    //   (err) => {
    //     console.log('FAILED...', err);
    //   }
    // );
  }
}
