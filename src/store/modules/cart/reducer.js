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
        case '@cart/ADD':
            return produce(state, draft => {
                const productIndex = draft.findIndex(
                    p => p.id === action.product.id
                );

                if (productIndex >= 0) {
                    draft[productIndex].amount += 1;
                } else {
                    draft.push({ ...action.product, amount: 1 });
                }
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
        case '@cart/UPDATE_AMOUNT': {
            if (action.amount <= 0) {
                return state;
            }

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
