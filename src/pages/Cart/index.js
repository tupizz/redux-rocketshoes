/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { Container, Total, ProductTable } from './styles';

export default function Cart() {
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
                    <tr>
                        <td>
                            <img
                                src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?resize=326:*"
                                alt="Tênis de caminhada leve e confortável"
                            />
                        </td>

                        <td>
                            <strong>Tênis muito massa</strong>
                            <span>R$129,90</span>
                        </td>

                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        size={20}
                                        color="#7159c1"
                                    />
                                </button>

                                <input type="number" readOnly value={1} />

                                <button type="button">
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
                            <button type="button">
                                <MdDelete size={20} color="#7159c1" />
                            </button>
                        </td>
                    </tr>
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
