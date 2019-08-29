/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';
import { Container, Total, ProductTable } from './styles';

function Cart({ cart, removeFromCart, updateAmount }) {
    function increment(product) {
        updateAmount(product.id, product.amount + 1);
    }

    function decrement(product) {
        updateAmount(product.id, product.amount - 1);
    }

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QUANTIDADE</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>

                <tbody>
                    {cart.map(product => (
                        <tr>
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>

                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormatted}</span>
                            </td>

                            <td>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => decrement(product)}
                                    >
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </button>

                                    <input
                                        type="number"
                                        readOnly
                                        value={product.amount}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => increment(product)}
                                    >
                                        <MdAddCircleOutline
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </button>
                                </div>
                            </td>

                            <td>
                                <strong>R$260,00</strong>
                            </td>

                            <td>
                                <button
                                    type="button"
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>

                <Total>
                    <span>Total</span>
                    <strong>R$1920,00</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
    cart: state.cart,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
