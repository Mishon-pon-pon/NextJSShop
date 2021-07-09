import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGood } from '../../components/GoodBar'

interface GoodsState {
    goods: Array<IGood>
}

const initialState: GoodsState = {
    goods: []
}

export const goodsSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        setGoods: (state, action: PayloadAction<any>) => {
            state.goods = action.payload;
        }
    }
})

export const { setGoods } = goodsSlice.actions

export default goodsSlice.reducer