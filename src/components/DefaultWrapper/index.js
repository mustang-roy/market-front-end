import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Footer, Header, Main, Wrapper } from './style';
import Button from '../Button';

function DefaultWrapper(props) {
  const { wrapperInfo, children, render } = props;

  return (
    <Wrapper>
      <Header>
        {wrapperInfo.title}
        {
          wrapperInfo.showHeaderButton && (
            <Button as={Link} to="/cart">
              Ir para o carrinho
            </Button>
          )
        }
        <Button as={Link} to={wrapperInfo.closeButtonLink}>
          FECHAR
        </Button>
      </Header>

      <Main>
        {children}
      </Main>

      <Footer>
        {render && render}

        <Button as={Link} to={wrapperInfo.footerButtonLink}>
          {wrapperInfo.footerButtonText}
        </Button>
      </Footer>
    </Wrapper >
  );
}

DefaultWrapper.propTypes = {
  wrapperInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    showHeaderButton: PropTypes.bool.isRequired,
    footerButtonText: PropTypes.string.isRequired,
    footerButtonLink: PropTypes.string.isRequired,
    closeButtonLink: PropTypes.string.isRequired,
  }).isRequired,
  render: PropTypes.any,
};

export default DefaultWrapper;
