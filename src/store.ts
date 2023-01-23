import { createStore } from 'redux';
import { queryReducer } from './queryReducer';

export const store = createStore(queryReducer);