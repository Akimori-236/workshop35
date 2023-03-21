import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from '../GameService';
import { Subscription } from 'rxjs';
import { Game } from '../models';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit, OnDestroy {

  constructor(private gameSvc: GameService) { }

  gameSub!: Subscription
  gameList: Game[] = []
  gameNameList: string[] = []

  ngOnInit(): void {
    // sub to service on init
    this.gameSub = this.gameSvc.onGames.subscribe(
      // intake data from sub
      (data) => this.gameList = data
    )
  }

  ngOnDestroy(): void {
    this.gameSub.unsubscribe()
  }

  
}