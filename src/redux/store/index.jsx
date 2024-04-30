import { configureStore } from '@reduxjs/toolkit'
import taskSlice from '../slices/todoSlices'

const store = configureStore({
    reducer: {
        task: taskSlice
    }
})

export default store