import {createSlice} from '@reduxjs/toolkit';
const configSlice = createSlice({
  name: 'config',
  initialState: {currentPath: '/alarms'},
  reducers: {
    changeCurrentPath(state, action) {
      return {...state, currentPath: action.payload};
    },
  },
});
export {configSlice};
export const {changeCurrentPath} = configSlice.actions;
