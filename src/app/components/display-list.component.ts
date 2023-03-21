import { Component, OnInit } from '@angular/core';
import { GameService } from '../GameService';
import { Game, SearchTerms } from '../models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  constructor(private gameSvc: GameService) { }

  gameList: Game[] = []
  gameSub!: Subscription

  ngOnInit(): void {
    // sub to service
    this.gameSub = this.gameSvc.onGames.subscribe(
      response => this.gameList = response
    )
  }

}