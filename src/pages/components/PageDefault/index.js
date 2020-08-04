import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;

export default function PageDefault({ children: Page, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>{Page}</Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  children: [],
  paddingAll: '10px',
};

PageDefault.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  paddingAll: PropTypes.number,
};
