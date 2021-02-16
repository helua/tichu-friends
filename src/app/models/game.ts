
export interface Game {
    player1a?: Player;
    player1b?: Player;
    player2a?: Player;
    player2b?: Player;
    cards1: number;
    cards2: number;
    tichu1: TichuTeam;
    tichu2: TichuTeam;
    duel1: Duel;
    duel2: Duel;
    total1?: number;
    total2?: number; 

}
export const EmptyGame = {
    cards1: 50,
    cards2: 50,
    tichu1: {
        player1: {
            success: undefined,
            grande: undefined,
            score: 0,
        },
        // player2: {
        //     success: undefined,
        //     grande: undefined,
        //     score: 0,
        // }
        },
    tichu2: {
        player1: {
            success: undefined,
            grande: undefined,
            score: 0,
        },
        // player2: {
        //     success: undefined,
        //     grande: undefined,
        //     score: 0,
        // }
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


export interface TichuTeam {
    player1: TichuPlayer;
    player2?: TichuPlayer;
}

export interface TichuPlayer {
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
    teams?: Team[];
    games?: Game[];
    bigGames?: BigGame[];
}

export interface PlayersInTeam {
    playerA: Player;
    playerB: Player;
    team: number;
}

export interface BigGame {
    games: Game[];
    player1a?: Player;
    player1b?: Player;
    player2a?: Player;
    player2b?: Player;
    date?: string;
    total1?: number;
    total2?: number;
}


export const EmptyBigGame = {
    games: [],
    total1: 0,
    total2: 0
}