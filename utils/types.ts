export interface IClassicGameData {
    gameData: {
        players: {
            [player: string]: {
                bet: number
            }
        },
        win: number,
      },
      gamerData: {
        myBet: number,
        ticketPrice: number,
        chanceOnWin: number
      }    
}

export interface IClassic {
    fastGameData: IClassicGameData
    easyGameData: IClassicGameData
    vipGameData: IClassicGameData
    isLoading: false
}

export interface IStore {
    user: {
        user: {
            token: string
            email: string
            name: string
            balance: string
        },
        isAuthorized: boolean
        authFail: boolean
        isProgress: boolean
    },
    classic: IClassic
}

export interface IPlainAction {
    type: string
} 

export interface IAction<TPayload> {
    type: string
    payload: TPayload
}

export interface IGetOption {
    method: "get"
    mode?: "cors" | "navigate" | "no-cors" | "same-origin"
    headers: {
        token: string
    } 
}

export interface IPostOption<IBody> {
    method: "post"
    mode?: "cors" | "navigate" | "no-cors" | "same-origin"
    headers: {
        token: string
    }
    body: IBody
}

export type TGameModes = ('fastGameData' | 'easyGameData' | 'vipGameData');

export type TStatuses = Record<TGameModes, number>;
