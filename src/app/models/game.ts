
export interface Game {
    cards1: number;
    cards2: number;
    tichu1: Tichu;
    tichu2: Tichu;
    duel1: Duel;
    duel2: Duel;
    total1?: number;
    total2?: number; 

}
export const EmptyGame = {
    cards1: 50,
    cards2: 50,
    tichu1: {
            success: undefined,
            grande: undefined,
            score: 0,
          },
    tichu2: {
        success: undefined,
        grande: undefined,
        score: 0
      },
    duel1:  {
        success: undefined,
        score: 0
    },
    duel2:  {
        success: undefined,
        score: 0
    },
    total1: 50,
    total2: 50
}
        
export interface Tichu {
    success: boolean;
    player?: Player;
    grande: boolean;
    score: number;
}

export interface Duel {
    success: boolean;
    player?: Player;
    score: number;
}


export interface Team {
    player1: Player;
    player2: Player;
}

export interface Player {
    name: string;
    teams: Team[];
    games: Game[];
    bigGames: BigGame[];
}

export interface BigGame {
    games: Game[];
    date?: string;
}