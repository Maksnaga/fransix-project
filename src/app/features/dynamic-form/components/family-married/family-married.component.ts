import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicFormService } from '../../service/dynamic-form.service';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-family-married',
  standalone: true,
  imports: [InputTextModule, FormsModule, CalendarModule],
  templateUrl: './family-married.component.html',
  styleUrl: './family-married.component.scss',
})
export class FamilyMarriedComponent {
  constructor(public dynamicFormService: DynamicFormService) {
    this.dynamicFormService.isMarried = true;
  }
}
