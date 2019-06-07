import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadCategoriesRequest: null,
  loadCategoriesSuccess: ['data'],
});

export const CategoriesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_CATEGORIES_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_CATEGORIES_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
});
