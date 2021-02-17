
export interface Game {
    player1a?: Player;
    player1b?: Player;
    player2a?: Player;
    player2b?: Player;
    cards1: number;
    cards2: number;
    tichu1: Tichu[];
    tichu2: Tichu[];
    duel1: Duel;
    duel2: Duel;
    total1?: number;
    total2?: number; 
}
export interface Tichu {
    player?: Player;
    tichu: TichuType;
    score: number;
}
export enum TichuType{
    TICHU = "TICHU", TICHUFAIL = "TICHUFAIL", GRANDE = "GRANDE", GRANDEFAIL = "GRANDEFAIL"
}
export const EmptyGame = {
    cards1: 50,
    cards2: 50,
    tichu1: [],
    tichu2: [],

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


// export interface TichuTeam {
//     player1: TichuPlayer;
//     player2?: TichuPlayer;
// }

// export interface TichuPlayer {
//     success: boolean;
//     player?: Player;
//     grande: boolean;
//     score: number;
// }

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
    player1a: { name: "Player 1a" },
    player1b: { name: "Player 1b" },
    player2a: { name: "Player 2a" },
    player2b: { name: "Player 2b" },
    total1: 0,
    total2: 0
}

export const TichuCollection = [
    {name: "tichu",
    enum: "TICHU",
    score: 100,
    checked: false
    },

    {name: "Tichu Fail",
    enum: "FAIL",
    score: -100,
    checked: false
},

    {name: "Grande",
    enum: "GRANDE",
    score: 200,
    checked: false
},

    {name: "Grande Fail",
    enum: "GRANDEFAIL",
    score: -200,
    checked: false
},
  ]