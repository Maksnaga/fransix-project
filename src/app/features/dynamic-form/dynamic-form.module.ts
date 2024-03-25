import { NgModule } from '@angular/core';
import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { DynamicFormComponent } from './dynamic-form.component';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { MyProjectComponent } from './components/my-project/my-project.component';
import { TreeModule } from 'primeng/tree';
import { NodeService } from './service/node.service';
import { DynamicFormService } from './service/dybamic-form.service';

@NgModule({
  declarations: [DynamicFormComponent, MyProjectComponent],
  imports: [
    DynamicFormRoutingModule,
    ButtonModule,
    ProgressBarModule,
    TreeModule,
  ],
  exports: [DynamicFormComponent, MyProjectComponent],
  providers: [NodeService, DynamicFormService],
})
export class DynamicFormModule {}
