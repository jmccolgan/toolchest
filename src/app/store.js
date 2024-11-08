import { configureStore } from '@reduxjs/toolkit';

import calulatorReducer from '../features/calculator/calculatorSlice';
import newsReducer from '../features/news/newsSlice'

export const store = configureStore({
    reducer: {
     calculator: calulatorReducer,
     news: newsReducer,
    },
  });