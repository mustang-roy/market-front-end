import React from 'react';

import DefaultWrapper from '../../components/DefaultWrapper';
import Cart from '../../components/Cart';

const detailPage = {
  title: 'Carrinho de compras',
  showHeaderButton: false,
  closeButtonLink: '/',
};

const button = <button>Comprar</button>;

function CartPage() {
  return (
    <DefaultWrapper wrapperInfo={detailPage} render={button}>
      <Cart />
    </DefaultWrapper>
  );
}

export default CartPage;
