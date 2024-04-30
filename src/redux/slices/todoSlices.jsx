import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import moment from "moment/moment";
import "moment/locale/es"

const todoSlices = createSlice({
    name: "task",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            
            const todo = {
                id: uuidv4(),
                date: moment().format("LLL"),
                description: action.payload,
                done: false,
            }

            state.push(todo)
        },
        toggleTask: (state, action) => {
            const index = state.findIndex( (todo) => todo.id === action.payload.id )
            state[index].done = action.payload.done
        },
        deleteTask: (state, action) => {
            return state.filter( (todo) => todo.id !== action.payload.id)
        }
    }
})
//actions
export const {addTask, toggleTask, deleteTask} = todoSlices.actions
//reducers
export default todoSlices.reducer