import { Component, OnInit } from '@angular/core';
import { GameData } from 'src/app/models/gameData';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gamesInfo:GameData[] = []
  constructor(private service:CardService) { }

  ngOnInit(): void {
    this.gamesInfo = this.service.getGamesInfo();
  }

}
