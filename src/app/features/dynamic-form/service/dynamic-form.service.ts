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
  valuesChildren: { value: string; selected: boolean }[] = [
    { value: 'N’avez pas d’enfant', selected: true },
    { value: 'Avez 1 enfant', selected: false },
    { value: 'Avez 2 enfants', selected: false },
    { value: 'Avez 3 enfants', selected: false },
    { value: 'Avez 4 enfants', selected: false },
    { value: 'Avez 5 enfants', selected: false },
    { value: 'Plus de 5 enfants', selected: false },
  ];
  valuesDependantChild: { value: string; selected: boolean }[] = [
    { value: 'Aucun enfant à charge', selected: true },
    { value: '1 enfant à charge', selected: false },
    { value: '2 enfants à charge', selected: false },
  ];
  marriedBirthday: Date | undefined;
  spouseInformation: {
    firstName: string | undefined;
    lastName: string | undefined;
    birthday: Date | undefined;
  } = { firstName: undefined, lastName: undefined, birthday: undefined };
  isMarried: boolean = false;
  message: string = '';
  progress: number = 10;
}
