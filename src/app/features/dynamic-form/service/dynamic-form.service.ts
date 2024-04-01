import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api/treenode';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DynamicFormService {
  selectedNodes!: TreeNode[];
  disabledNextButton = new BehaviorSubject<boolean>(true);
  valuesFamily: { value: string; selected: boolean }[] = [
    { value: 'Célibataire', selected: true },
    { value: 'Marié', selected: false },
    { value: 'Pacsé', selected: false },
    { value: 'Concubin', selected: false },
    { value: 'Divorcé', selected: false },
    { value: 'Veuf', selected: false },
  ];
  valuesMarried: { value: string; selected: boolean }[] = [
    { value: 'la communauté réduite aux acquêts', selected: true },
    { value: 'la séparation de biens', selected: false },
  ];
  marriedBirthday: Date | undefined;

  message: string = '';
  progress: number = 10;
}
