import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable()
export class EmailService {
  constructor() {}

  sendEmail(emailData: any): Promise<any> {
    emailjs.init('loQqD3Y8csFyVTwVd');
    return emailjs.send('service_de4kx7o', 'template_zvv13h6', {
      from_name: 'Maxime',
      to_name: 'Moiroux',
      message: 'Mon message',
    });
  }
}
