import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name:"Prasad",
  amount:10000,
}

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
      checkBalance:(state,action)=>{
          state.name=action.payload
      },

      setBalance:(state,action)=>{
          state.amount=action.payload
      },

    
  },
})

// Action creators are generated for each case reducer function
export const {checkBalance,setBalance} = balanceSlice.actions

export default balanceSlice.reducer