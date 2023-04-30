import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IExample {
  number: number
}

const initialState: IExample = {
  number: 0,
}

export const example = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    setExample: (state, action: PayloadAction<number>) => {
      state.number = action.payload
    },
  },
})

export default example.reducer

export const { setExample } = example.actions
