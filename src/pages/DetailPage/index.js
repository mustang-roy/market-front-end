import React from 'react';

import data from '../../__mocks__/detailPage';

import DefaultWrapper from '../../components/DefaultWrapper';
import ShoppingDetails from '../../components/ShoppingDetails';

const item = {
  title: 'Samsung Odyssey',
  quantity: 3,
  price: 2500,
};

function DetailPage() {
  const { detailPage } = data;

  return (
    <DefaultWrapper wrapperInfo={detailPage} render={<ShoppingDetails item={item}/>}>
      <h1>Content</h1>
    </DefaultWrapper>
  );
}

export default DetailPage;
