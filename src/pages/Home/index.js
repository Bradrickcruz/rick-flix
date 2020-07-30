import React from 'react';

import dadosIniciais from '../../data/dados_iniciais.json';
import PageDefault from '../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function App() {
  return (
    <PageDefault>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={'O que é Front-end?'}
      />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      {dadosIniciais.categorias.map((categoria, index) => {
        if (index > 0) {
          return <Carousel category={categoria} />;
        }
        return '';
      })}
    </PageDefault>
  );
}

export default App;
