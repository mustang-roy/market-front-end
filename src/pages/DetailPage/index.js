import React from 'react';

import data from '../../__mocks__/detailPage';

import DefaultWrapper from '../../components/DefaultWrapper';
import ShoppingDetails from '../../components/ShoppingDetails';

function DetailPage() {
  const { detailPage } = data;

  return (
    <DefaultWrapper wrapperInfo={detailPage} render={<ShoppingDetails />}>
      <h1>Content</h1>
    </DefaultWrapper>
  );
}

export default DetailPage;
