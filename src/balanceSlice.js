import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount:0,
}

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
      checkBalance:(state,action)=>{
          state.amount+=action.payload
      }

    
  },
})

// Action creators are generated for each case reducer function
export const {checkBalance} = balanceSlice.actions

export default balanceSlice.reducer