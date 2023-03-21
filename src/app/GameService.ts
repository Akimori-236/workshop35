import { HttpClient, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable, Subject } from "rxjs";
import { Game, SearchTerms } from "./models";

// Springboot run From workshop 26
const GAMES_API = "localhost:8080/games"

@Injectable()
export class GameService {

    constructor(private http: HttpClient) { }

    onGames = new Subject<Game[]>

    getGamesObs(s: SearchTerms): Observable<Response> {
        const params = new HttpParams()
            .set('limit', s.limit)
            .set('offset', s.offset)

        return this.http.get<Response>(GAMES_API, { params })
            .pipe()
    }

    getGames(s: SearchTerms): Promise<Game[]> {
        return firstValueFrom(
            this.getGamesObs(s)
        ).then((response: any) => {
            const games = response['games'] as Game[]
            return games
        }).then((gameList: Game[]) => {
            this.onGames.next(gameList)
            return gameList
        })
    }


}