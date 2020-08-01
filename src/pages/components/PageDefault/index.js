import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

export default function PageDefault({ children: Page }) {
  return (
    <>
      <Menu />
      <Main>{Page}</Main>
      <Footer />
    </>
  );
}

PageDefault.propTypes = {
  children: PropTypes.arrayOf.isRequired,
};
