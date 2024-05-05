import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable()
export class EmailService {
  constructor() {}

  sendEmail(emailData: string): Promise<any> {
    emailjs.init('xG334W6nF7yqbPZvR');
    return emailjs.send('service_539ju5q', 'template_trnpklr', {
      from_name: 'Simulateur de projet immobilier',
      to_name: 'Simulateur',
      message: emailData,
    });
  }
}
