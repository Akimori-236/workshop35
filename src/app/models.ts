export interface SearchTerms {
    limit: number
    offset: number
}
export interface Game {
    gid: number
    name: string
    year?: number
    ranking?: number
    average?: string
    users_rated?: number
    url?: string
    image?: string
}
export interface Response {
    games: Game[]
    offset: number
    limit: number
    total: number
    timestamp: string
}