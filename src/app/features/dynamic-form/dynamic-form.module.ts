import { NgModule } from '@angular/core';
import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { DynamicFormComponent } from './dynamic-form.component';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { MyProjectComponent } from './components/my-project/my-project.component';
import { TreeModule } from 'primeng/tree';
import { NodeService } from './service/node.service';
import { DynamicFormService } from './service/dynamic-form.service';
import { ToastModule } from 'primeng/toast';
import { EmailService } from 'src/app/service/mail.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [DynamicFormComponent, MyProjectComponent],
  imports: [
    DynamicFormRoutingModule,
    ButtonModule,
    ProgressBarModule,
    TreeModule,
    ToastModule,
  ],
  exports: [DynamicFormComponent, MyProjectComponent],
  providers: [NodeService, DynamicFormService, EmailService, MessageService],
})
export class DynamicFormModule {}
