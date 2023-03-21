import { HttpClient, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable, Subject } from "rxjs";
import { Game, SearchTerms } from "./models";

// Springboot run from paf-workshop26
const GAMES_API = "http://localhost:8080/games"

@Injectable()
export class GameService {

    constructor(private http: HttpClient) { }

    onGames = new Subject<Game[]>

    getGameObs(s: SearchTerms): Observable<any> {
        const params = new HttpParams()
            .set('limit', s.limit)
            .set('offset', s.offset)
        return this.http.get<any>(GAMES_API, { params })
            .pipe()
    }

    getGames(s: SearchTerms): Promise<Game[]> {
        return firstValueFrom(this.getGameObs(s))
            .then((response: any) => {
                const g = response['games'] as Game[]
                return g
            })
            .then(games => {
                this.onGames.next(games)
                return games
            })
    }

}