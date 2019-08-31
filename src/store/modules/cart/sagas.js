import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { addToCartSuccess } from './actions';

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function*
function* addToCart({ id }) {
    // call é responsável em chamar métodos asincronos que retornam promises no js
    // yield é como se fosse o await
    const response = yield call(api.get, `/products/${id}`);

    yield put(addToCartSuccess(response.data));
}

/**
 * takeLatest - apenas pega a ultima vez clicado no botao
 *            1° param: qual ação deve ser interceptada
 *            2° param: o handler desse interceptador
 */
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
