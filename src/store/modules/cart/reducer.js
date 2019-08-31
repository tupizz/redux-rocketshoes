import produce from 'immer';

/**
 * Os reducers escutam todas as actions, por isso precisamos filtrar
 *
 */
export default function cart(state = [], action) {
    switch (action.type) {
        /**
         *  {
         *      product,
         *      amount
         *  }
         */
        case '@cart/ADD_SUCCESS':
            return produce(state, draft => {
                const { product } = action;

                draft.push(product);
            });

        /**
         *  {
         *      product_id
         *  }
         */
        case '@cart/REMOVE':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });

        /**
         *  {
         *      product_id,
         *      amount
         *  }
         */
        case '@cart/UPDATE_AMOUNT_SUCCESS': {
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });
        }
        default:
            return state;
    }
}
