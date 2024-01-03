import { PayloadAction } from "@reduxjs/toolkit";
import { Status, ToDo } from "../types/mainTypes";

export const addToDo = (state: ToDo[], action: PayloadAction<string>) => {
  const newToDo: ToDo = {
    id: new Date().toString(),
    title: action.payload,
    error: null,
    status: Status.SUCCESS
  }

  return [newToDo, ...state]
}