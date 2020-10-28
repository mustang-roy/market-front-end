import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Footer, Header, Main, Wrapper } from './style';
import Button from '../Button';

function DefaultWrapper(props) {
  const { header, children, footer } = props;

  return (
    <Wrapper>
      <Header>
        {header.title}
        {
          !header.isCart && (
            <Button as={Link} to={header.buttonTextLink}>
              {header.buttonText}
            </Button>
          )
        }
        <Button as={Link} to={header.buttonTextLink}>
          FECHAR
        </Button>
      </Header>

      <Main>
        {children}
      </Main>

      <Footer>
        {
          footer.isCart ? (
            <p>Valor total da compra R$ 999,99</p>
          ) : (
              <>
                <button>-</button>
                {footer.quantity}
                <button>+</button>
              R$ {footer.total}
                <Button as={Link} to={footer.buttonTextLink}>
                  {footer.buttonText}
                </Button>
              </>
            )
        }
      </Footer>
    </Wrapper >
  );
}

DefaultWrapper.propTypes = {
  header: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isCart: PropTypes.bool.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonTextLink: PropTypes.string.isRequired,
    buttonCloseLink: PropTypes.string.isRequired,
  }).isRequired,
  footer: PropTypes.shape({
    isCart: PropTypes.bool.isRequired,
    quantity: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonTextLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultWrapper;
