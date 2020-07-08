import {RouterReducerState} from '@ngrx/router-store';
import { IUserState, initialUserState } from './user.state';
import { IConfigState, initialConfigState } from './config.state';

export interface IAppState{
    router?:RouterReducerState;
    user:IUserState;
    config:IConfigState;
}

export const initialAppState:IAppState={
    user:initialUserState,
    config:initialConfigState
};

export function getInitialSate():IAppState{
    return initialAppState;
}