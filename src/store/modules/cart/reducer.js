/**
 * Os reducers escutam todas as actions, por isso precisamos filtrar
 */
export default function cart(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.product];
        default:
            return state;
    }
}
