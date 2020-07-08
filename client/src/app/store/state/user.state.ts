import { IUser } from 'src/app/model/user.interface';


export interface IUserState{
    users:IUser[];
    selectedUser:IUser;
}

export const initialUserState:IUserState={
  users:null,
  selectedUser:null
};