import React from 'react';

import data from '../../__mocks__/detailPage';

import DefaultWrapper from '../../components/DefaultWrapper';
import ShoppingDetails from '../../components/ShoppingDetails';

const item = {
  title: 'Samsung Odyssey',
  quantity: 3,
  price: 2500,
};

function DetailPage(props) {
  const { detailPage } = data;
  const { state: { title, thumbnail } } = props.location;

  return (
    <DefaultWrapper wrapperInfo={detailPage} render={<ShoppingDetails item={item}/>}>
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={thumbnail} alt={title}/>
      </div>
      <div>
        <h1>Especificações técnicas</h1>
        <p>
          Top
        </p>
      </div>
    </DefaultWrapper>
  );
}

export default DetailPage;
