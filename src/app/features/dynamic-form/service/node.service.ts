import { Injectable } from '@angular/core';

@Injectable()
export class NodeService {
  getTreeNodesData() {
    return [
      {
        key: '0',
        label: '❤️‍🩹 Santé',
        children: [
          {
            key: '0-0',
            label: 'Hospitalisation',
          },
          {
            key: '0-1',
            label: 'Dépassements d’honoraires',
          },
          {
            key: '0-2',
            label: 'Chambre particulière',
          },
          {
            key: '0-3',
            label: 'Indemnisation hospitalière',
          },
          {
            key: '0-4',
            label: 'Soins',
          },
          {
            key: '0-5',
            label: 'Optique',
          },
          {
            key: '0-6',
            label: 'Dentaire / Orthodontie',
          },
          {
            key: '0-7',
            label: 'Médecine douce',
          },
          {
            key: '0-8',
            label: 'Soins à domicile',
          },
        ],
      },

      {
        key: '1',
        label: '⛵ Projet à courts et moyen terme',
        children: [
          {
            key: '1-0',
            label: 'Mariage',
          },
          {
            key: '1-1',
            label: 'Enfants',
          },
          {
            key: '1-2',
            label: 'Changement d’activité',
          },
          {
            key: '1-3',
            label: 'Déménagement',
          },
          {
            key: '1-4',
            label: 'Voyages',
          },
          {
            key: '1-5',
            label: 'Études des enfants',
          },
          {
            key: '1-6',
            label: 'Installation des enfants',
          },
          {
            key: '1-7',
            label: 'Financement / achat',
          },
        ],
      },
      {
        key: '2',
        label: '☂️ Protection de la personne / Famille',
        children: [
          {
            key: '2-0',
            label: 'Maladie / Santé',
          },
          {
            key: '2-1',
            label: 'Accident professionnel',
          },
          {
            key: '2-2',
            label: 'Accident personnel',
          },
          {
            key: '2-3',
            label: 'Arrêt de travail',
          },
          {
            key: '2-4',
            label: 'Invalidité',
          },
          {
            key: '2-5',
            label: 'Dépendance',
          },
          {
            key: '2-6',
            label: 'Décès',
          },
          {
            key: '2-7',
            label: 'Obsèques',
          },
          {
            key: '2-8',
            label: 'Protection juridique',
          },
        ],
      },
      {
        key: '3',
        label: '💎 Protection des biens et responsabilités',
        children: [
          {
            key: '3-0',
            label: 'Auto / 2 roues',
          },
          {
            key: '3-1',
            label: 'Habitation',
          },
          {
            key: '3-2',
            label: 'Responsabilité civile',
          },
          {
            key: '3-3',
            label: 'Bateau',
          },
          {
            key: '3-4',
            label: 'Objets précieux',
          },
        ],
      },
      {
        key: '4',
        label: '👨‍👩‍👧 Transmission',
        children: [
          {
            key: '4-0',
            label: 'Qui ? (Famille, Tiers)',
          },
          {
            key: '4-1',
            label: 'Quand, comment ?',
          },
          {
            key: '4-2',
            label: 'Patrimoine privé / professionnel',
          },
          {
            key: '4-3',
            label: 'Préparer ma succession',
          },
          {
            key: '4-4',
            label: 'Réduire les droits de succession',
          },
        ],
      },
      {
        key: '5',
        label: '🪑 Retraite',
        children: [
          {
            key: '5-0',
            label: 'À quel âge ?',
          },
          {
            key: '5-1',
            label: 'Complément de revenus',
          },
          {
            key: '5-@',
            label: 'Préparer sa retraite',
          },
          {
            key: '5-3',
            label: 'Garantir les ressources de mon conjoint',
          },
        ],
      },
      {
        key: '6',
        label: '💵 Épargne et fiscalité',
        children: [
          {
            key: '6-0',
            label: 'Investir / épargner',
          },
          {
            key: '6-1',
            label: 'Profiter d’instruments financiers performants',
          },
          {
            key: '6-2',
            label: 'Diminuer la pression fiscale sur mon revenu',
          },
          {
            key: '6-3',
            label: 'Diminuer la pression fiscale sur mon patrimoine',
          },
          {
            key: '6-4',
            label: 'Diminuer la pression fiscale sur mon succession',
          },
        ],
      },
      {
        key: '7',
        label: '🏠 Constitution de patrimoine',
        children: [
          {
            key: '7-0',
            label: 'Patrimoine financier',
          },
          {
            key: '7-1',
            label: 'Immobilier',
          },
          {
            key: '7-2',
            label: 'Résidence locative',
          },
          {
            key: '7-3',
            label: 'Travaux',
          },
        ],
      },
    ];
  }

  getTreeNodes() {
    return Promise.resolve(this.getTreeNodesData());
  }

  getFiles() {
    return Promise.resolve(this.getTreeNodesData());
  }
}
