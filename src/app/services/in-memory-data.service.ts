import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const characters = [
      { id: 1,
        name: 'Wolverine',
        baseStats: {    // BST: 500
          health: 100,
          energy: 40,
          strength: 100,
          toughness: 80,
          intelligence: 30,
          fortitude: 70,
          speed: 80
        },
        playable: true
    },
      {
        id: 2,
        name: 'Professor X',
        baseStats: {    // BST: 540
          health: 30,
          energy: 150,
          strength: 10,
          toughness: 10,
          intelligence: 160,
          fortitude: 160,
          speed: 20
        },
        playable: true
      },
      {
        id: 3,
        name: 'Doombot',
        baseStats: {    // BST: 300
          health: 50,
          energy: 30,
          strength: 60,
          toughness: 50,
          intelligence: 20,
          fortitude: 40,
          speed: 50
        },
        playable: false
      }
    ];
    return { characters };
  }
}
