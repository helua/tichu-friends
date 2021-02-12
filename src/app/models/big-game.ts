import { BigGame } from '../models/game';


export const BIGGAME: BigGame = {
    games: [] = [
        {       
            cards1: 0,
            cards2: 0,
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
            total1: 0,
            total2: 0
        }
    ],
}