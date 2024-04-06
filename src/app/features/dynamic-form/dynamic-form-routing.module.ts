import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProjectComponent } from './components/my-project/my-project.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { FamilyComponent } from './components/family/family.component';
import { ChildrenComponent } from './components/children/children.component';
import { FamilyMarriedComponent } from './components/family-married/family-married.component';
import { WorkSituationComponent } from './components/work-situation/work-situation.component';
import { MarriedWorkSituationComponent } from './components/married-work-situation/married-work-situation.component';
import { PropertyAssetsComponent } from './components/property-assets/property-assets.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicFormComponent,
    children: [
      { path: '', component: MyProjectComponent },
      { path: 'family', component: FamilyComponent },
      { path: 'married', component: FamilyMarriedComponent },
      { path: 'children', component: ChildrenComponent },
      { path: 'work', component: WorkSituationComponent },
      { path: 'married-work', component: MarriedWorkSituationComponent },
      { path: 'property', component: PropertyAssetsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicFormRoutingModule {}
