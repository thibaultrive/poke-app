import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import generationReducer from '../features/generation/generationSlice';
import speciesReducer from '../features/species/speciesSlice';


export const store = configureStore({
  reducer: {
    generation: generationReducer,
    species: speciesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
