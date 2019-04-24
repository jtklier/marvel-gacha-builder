import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CharacterService } from '../services/character.service';
import { Character } from '../character';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  id: number;
  character: Character;
  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter(): void {
    this.route.params.subscribe(data => this.id = +(data.id));
    this.characterService.getCharacter(this.id).subscribe(c => this.character = c);
  }

  styleBar(val: number, stat: string): any {
    if ( val !== 0 && !val) {
      return {};
    }
    const statPercent = Math.min(val * .5, 100);
    /* alternative way to style the bars with different gradient effects - WIP */
    // const colors = {
    //   0: 'red',
    //   1: 'orange',
    //   2: 'yellow',
    //   3: 'green',
    //   4: 'aqua'
    // };
    // let barBackground = '';
    // if (colors[statPercent / 25]) {
    //   barBackground = colors[statPercent / 25];
    // } else {
    //   const left = Math.floor(statPercent / 25);
    //   const right = Math.ceil(statPercent / 25);
    //   const ratio = (100 - ((statPercent / 25) - left) * 100) + '%';

    //   barBackground = `linear-gradient(to right, orange, ${(100 - statPercent) + '%'}, red)`;
    // }

    const statsToColors = {
      health: '255,0,0',  // red
      energy: '255,255,0', // yellow
      strength: '255,165,0', // orange
      toughness: '0,0,255',  // blue
      intelligence: '75,0,130', // violet
      fortitude: '225,0,215',  // magenta/pink
      speed: '0,255,0'  // light green
    };
    const barBackground = `linear-gradient(to right, rgb(${statsToColors[stat]},0.3), rgb(${statsToColors[stat]},1))`;

    return {
      height: '100%',
      width: statPercent + '%',
      background: barBackground
    };
  }

}
