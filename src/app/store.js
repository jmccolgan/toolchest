import { configureStore } from '@reduxjs/toolkit';

import calulatorReducer from '../features/calculator/calculatorSlice';

export const store = configureStore({
    reducer: {
     calculator: calulatorReducer,
    },
  });