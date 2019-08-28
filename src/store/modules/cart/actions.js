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
