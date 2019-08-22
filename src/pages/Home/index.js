import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            {[1, 2, 3, 4, 5, 6].map(() => (
                <li>
                    <img
                        src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?resize=326:*"
                        alt="Tênis de caminhada leve e confortável"
                    />
                    <strong>Tênis muito bacana</strong>
                    <span>R$129,90</span>

                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" /> 3
                        </div>

                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}
