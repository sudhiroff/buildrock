
import { createAction, props } from '@ngrx/store';
import { ToDo } from "../../model/todo.model"

export const GetToDoAction = createAction('[ToDo] - Get ToDo');

export const CreateToDoAction=createAction(
    '[ToDo] Create ToDo',
    props<ToDo>()
);

