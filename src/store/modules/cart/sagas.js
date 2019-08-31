import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import formatPrice from '../../../utils/format';

import { addToCartSuccess, updateAmount } from './actions';

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function*
function* addToCart({ id }) {
    const productExists = yield select(state =>
        state.cart.find(p => p.id === id)
    );

    if (productExists) {
        yield put(updateAmount(id, productExists.amount + 1));
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
    }
}

/**
 * takeLatest - apenas pega a ultima vez clicado no botao
 *            1° param: qual ação deve ser interceptada
 *            2° param: o handler desse interceptador
 */
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
