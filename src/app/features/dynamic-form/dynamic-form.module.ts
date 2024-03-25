import { NgModule } from '@angular/core';
import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { DynamicFormComponent } from './dynamic-form.component';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { MyProjectComponent } from './components/my-project/my-project.component';

@NgModule({
  declarations: [DynamicFormComponent, MyProjectComponent],
  imports: [DynamicFormRoutingModule, ButtonModule, ProgressBarModule],
  exports: [DynamicFormComponent, MyProjectComponent],
})
export class DynamicFormModule {}
