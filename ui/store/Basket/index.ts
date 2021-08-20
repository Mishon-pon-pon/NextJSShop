import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    products: Record<string, number>
}

// Define the initial state using that type
const initialState: CounterState = {
    products: {},
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        incrementByAmount: (state, action: PayloadAction<{amount: number, goodId: number}>) => {
            state.products[action.payload.goodId] = action.payload.amount
        },
    }
})

export const { incrementByAmount } = counterSlice.actions

export default counterSlice.reducer