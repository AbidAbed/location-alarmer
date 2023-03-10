import {configureStore} from '@reduxjs/toolkit';
import {alarmsSlice, addAlarm} from './slices/alarmsSlices';
import {configSlice, changeCurrentPath} from './slices/configSlice';
const store = configureStore({
  reducer: {
    alarms: alarmsSlice.reducer,
    config: configSlice.reducer,
  },
});
export {addAlarm, store, changeCurrentPath};
