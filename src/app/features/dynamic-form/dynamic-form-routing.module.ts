import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProjectComponent } from './components/my-project/my-project.component';
import { DynamicFormComponent } from './dynamic-form.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicFormComponent,
    children: [{ path: '', component: MyProjectComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicFormRoutingModule {}
