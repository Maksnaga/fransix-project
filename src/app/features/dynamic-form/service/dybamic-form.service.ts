import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DynamicFormService {
  disabledNextButton = new BehaviorSubject<boolean>(true);
  message: string = '';
}
