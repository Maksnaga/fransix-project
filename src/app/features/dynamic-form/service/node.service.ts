import { Injectable } from '@angular/core';

@Injectable()
export class NodeService {
  getTreeNodesData() {
    return [
      {
        key: '0',
        label: '⛵ Protection de la personne',
        children: [
          {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
          },
          {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
          },
        ],
      },
      {
        key: '1',
        label: '💎 Protection des biens et responsabilités',
        children: [
          {
            key: '1-0',
            label: 'Meeting',
            data: 'Meeting',
          },
          {
            key: '1-1',
            label: 'Product Launch',
            data: 'Product Launch',
          },
          {
            key: '1-2',
            label: 'Report Review',
            data: 'Report Review',
          },
        ],
      },
      {
        key: '2',
        label: '👨‍👩‍👦 Transmission',
        children: [
          {
            key: '2-0',
            label: 'Al Pacino',
            data: 'Pacino Movies',
          },
          {
            key: '2-1',
            label: 'Robert De Niro',
            data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '3',
        label: '🪑Retraite',
        children: [
          {
            key: '3-0',
            label: 'Al Pacino',
            data: 'Pacino Movies',
          },
          {
            key: '3-1',
            label: 'Robert De Niro',
            data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '4',
        label: '💵 Épargne et fiscalité',
        children: [
          {
            key: '4-0',
            label: 'Al Pacino',
            data: 'Pacino Movies',
          },
          {
            key: '4-1',
            label: 'Robert De Niro',
            data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '5',
        label: '🏠 Constitution de patrimoine',
        children: [
          {
            key: '5-0',
            label: 'Al Pacino',
            data: 'Pacino Movies',
          },
          {
            key: '5-1',
            label: 'Robert De Niro',
            data: 'De Niro Movies',
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
