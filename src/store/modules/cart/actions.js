/**
 * Essa action recebe o ID e mando para o redux-saga que por sua vez intercepta
 * e pega o id procura na api o produto com aquela ID e retorna para o frontend
 * o produto como um todo, não apenas o id dele
 * @param {*} id
 */
export function addToCartRequest(id) {
    return {
        type: '@cart/ADD_REQUEST',
        id,
    };
}

/**
 * Action disparada pelo redux-saga após ele buscar os dados do produto
 * @param {*} product
 */
export function addToCartSuccess(product) {
    return {
        type: '@cart/ADD_SUCCESS',
        product,
    };
}

export function removeFromCart(productId) {
    return {
        type: '@cart/REMOVE',
        id: productId,
    };
}

export function updateAmount(id, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT',
        id,
        amount,
    };
}
