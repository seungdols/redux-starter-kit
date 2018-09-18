import { handleActions, createAction } from 'redux-actions';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = createAction(INCREMENT);
export const incrementAsync = () => dispatch => {
    setTimeout(
        () => { dispatch(increment())} , 1000
    )
}
export const decrement = createAction(DECREMENT);
export const decrementAsync = () => dispatch => {
    setTimeout(
        () => { dispatch(decrement())}, 1000
    )
}

export default handleActions({
    [INCREMENT]: (state, action) => state + 1,
    [DECREMENT]: (state, action) => state - 1
},  1);