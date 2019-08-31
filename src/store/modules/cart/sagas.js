import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { formatPrice } from '../../../utils/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function*
function* addToCart({ id }) {
    const productExists = yield select(state =>
        state.cart.find(p => p.id === id)
    );

    // Verifição de estoque
    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;
    const chartAmount = productExists ? productExists.amount : 0;

    // New amount after added
    const newAmount = chartAmount + 1;
    if (newAmount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
    }

    if (productExists) {
        yield put(updateAmountSuccess(id, newAmount));
    } else {
        // call é responsável em chamar métodos asincronos que retornam promises no js
        // yield é como se fosse o await
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };

        yield put(addToCartSuccess(data));

        history.push('/cart');
    }
}

function* updateAmount({ id, amount }) {
    if (amount <= 0) return;

    // Verifição de estoque
    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
    }

    yield put(updateAmountSuccess(id, amount));
}

/**
 * takeLatest - apenas pega a ultima vez clicado no botao
 *            1° param: qual ação deve ser interceptada
 *            2° param: o handler desse interceptador
 */
export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
