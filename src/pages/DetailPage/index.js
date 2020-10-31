import React from 'react';

import DefaultWrapper from '../../components/DefaultWrapper';
import ShoppingDetails from '../../components/ShoppingDetails';

const detailPage = {
  title: 'Detalhes do produto',
  showHeaderButton: true,
  closeButtonLink: '/',
};

function DetailPage(props) {
  const { state } = props.location;
  const { title, thumbnail } = state;

  return (
    <DefaultWrapper wrapperInfo={detailPage} render={<ShoppingDetails item={state} />}>
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={thumbnail} alt={title} />
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
