import { IUser } from "@entities/Soda";

declare module 'express' {
    export interface Request  {
        body: {
            soda: ISoda,
            snack:ISnack
        };
    }
}
