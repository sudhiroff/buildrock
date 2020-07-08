import { IConfig } from 'src/app/model/user.interface';


export interface IConfigState{
    config:IConfig;
}

export const initialConfigState:IConfigState={
    config:null
};