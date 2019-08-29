export function addToCart(product) {
    return {
        type: '@cart/ADD',
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
