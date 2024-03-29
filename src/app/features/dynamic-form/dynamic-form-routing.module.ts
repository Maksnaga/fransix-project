import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProjectComponent } from './components/my-project/my-project.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { FamilyComponent } from './components/family/family.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicFormComponent,
    children: [
      { path: '', component: MyProjectComponent },
      { path: 'family', component: FamilyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicFormRoutingModule {}
