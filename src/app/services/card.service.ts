import { Injectable } from '@angular/core';
import { GameData } from '../models/gameData';

const gamesDataMock = [
  {
    img:"../../../assets/bt-1.jpg",
    label:"EXCLUSIVE",
    price:"R$ 99,99",
    type:"Digital PS4"
  },
  {
    img:"../../../assets/bt-4.jpg",
    label:"EXCLUSIVE",
    price:"R$ 119,99",
    type:"Digital PS5"
  },
  {
    img:"../../../assets/bt-5.jpg",
    label:"DIGITAL",
    price:"R$ 199,99",
    type:"Digital PS5"
  },
  {
    img:"../../../assets/ac-cover.jpg",
    label:"BEST OF YEAR",
    price:"R$ 149,99",
    type:"Digital PS4 PS5"
  },
]

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getGamesInfo():GameData[] {
    return gamesDataMock;
  }

}
