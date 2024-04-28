import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api/treenode';

@Injectable()
export class DynamicFormService {
  selectedNodes!: TreeNode[];
  disabledNextButton = true;

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
    { value: 'autre', selected: false },
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

  valuesWorkSituation: { value: string; selected: boolean }[] = [
    { value: 'Artisan', selected: true },
    { value: 'Commerçant', selected: false },
    { value: 'Indépendant', selected: false },
    { value: 'Agriculteur', selected: false },
    { value: 'Cadre', selected: false },
    { value: 'Non cadre', selected: false },
    { value: 'Chef d’entreprise', selected: false },
    { value: 'Retraité', selected: false },
  ];

  valuesMarriedWorkSituation: { value: string; selected: boolean }[] = [
    { value: 'Artisan', selected: true },
    { value: 'Commerçant', selected: false },
    { value: 'Indépendant', selected: false },
    { value: 'Agriculteur', selected: false },
    { value: 'Cadre', selected: false },
    { value: 'Non cadre', selected: false },
    { value: 'Chef d’entreprise', selected: false },
    { value: 'Retraité', selected: false },
  ];

  propertyAssetsValues: { value: string; selected: boolean }[] = [
    { value: 'Locataire', selected: false },
    { value: 'Propriétaire', selected: false },
    { value: 'Hébergé gratuitement', selected: false },
    { value: 'Dans un logement de fonction', selected: false },
  ];

  propertyTypeValues: { value: string; selected: boolean }[] = [
    { value: 'Une maison', selected: false },
    { value: 'Un appartement', selected: false },
  ];

  estimateValues: { value: string; selected: boolean }[] = [
    { value: 'Entre 0 est 250 000€', selected: false },
    { value: 'Entre 250 000 est 500 000€', selected: false },
    { value: 'Entre 500 000 est 750 000€', selected: false },
    { value: 'Entre 750 000 est 1 000 000€', selected: false },
    { value: 'Plus de 1 000 000€', selected: false },
  ];

  otherPropertiesValues: { value: string; selected: boolean }[] = [
    { value: 'Ne possédez pas d’autre bien immobiliers', selected: false },
    { value: 'Possédez d’autres bien immobiliers', selected: false },
  ];

  otherFinancialValues: { value: string; selected: boolean }[] = [
    { value: 'Ne possédez pas d’autres épargnes', selected: false },
    { value: 'Possédez d’autres épargnes', selected: false },
  ];

  contactTypeValues: { value: string; selected: boolean }[] = [
    { value: 'Être contacté par téléphone par un expert', selected: false },
    {
      value: 'Ne pas être contacté par téléphone par un expert',
      selected: false,
    },
  ];

  marriedBirthday: Date | undefined;
  isMarried: boolean = false;
  spouseInformation: {
    firstName: string | undefined;
    lastName: string | undefined;
    birthday: Date | undefined;
  } = { firstName: undefined, lastName: undefined, birthday: undefined };

  workName: string | undefined;
  marriedWorkName: string | undefined;
  workSalary: number | undefined;
  marriedWorkSalary: number | undefined;

  isOwner: boolean = false;
  creditInProgress: boolean = false;
  monthlyPayment: number | undefined;
  endingPayment: Date | undefined;

  message: string = '';
  progress: number = 10;

  propetyOwnerIsSelected = false;
  propertyTypeIsSelected = false;
  estimateIsSelected = false;
  propertyFormIsCompleted = false;

  hasOtherProperties = false;
  propertiesMap: Map<string, Map<string, { name: string; code: string }[]>> =
    new Map();
  // creditInProgressMap: Map<string, boolean> = new Map();
  // rentInProgressMap: Map<string, boolean> = new Map();
  creditPropertiesMap: Map<
    string,
    { value: number | undefined; ending: Date | undefined }
  > = new Map();
  rentPropertiesMap: Map<string, number | undefined> = new Map();

  hasOtherFinancialAssets = false;
  financialAssetsMap: Map<
    string,
    Map<string, { name: string; code: string }>
  > = new Map();
  currentAccount: number | undefined;
  pelCreationDate: Date | undefined;

  userMail: string | undefined;
  userPhone: string | undefined;
}
