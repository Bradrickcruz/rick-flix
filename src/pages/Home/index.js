import React from 'react';

import dadosIniciais from '../../data/dados_iniciais.json';
import PageDefault from '../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

export default function Home() {
  return (
    <PageDefault>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-end?"
      />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      {dadosIniciais.categorias.map((categoria, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Carousel key={index} category={categoria} />
      ))}
    </PageDefault>
  );
}
