import {createSlice} from '@reduxjs/toolkit';
const alarmsSlice = createSlice({
  name: 'alarms',
  initialState: [],
  reducers: {
    addAlarm(state, action) {
      return [...state, action.payload];
    },
  },
});
export {alarmsSlice};
export const {addAlarm} = alarmsSlice.actions;
