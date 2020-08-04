import React, { useState, useEffect } from 'react';

// import dadosIniciais from '../../data/dados_iniciais.json';
import PageDefault from '../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepo from '../../repositories/categories';
// import videosRepo from '../../repositories/videos';

function generateId(text) {
  return `id_${text}`.replace(' ', '_');
}

export default function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const [hasDados, setHasDados] = useState(false);

  useEffect(() => {
    (async () => {
      const allCategoriesWithVideos = await categoriesRepo.getAllWithVideos();
      setDadosIniciais([...allCategoriesWithVideos]);
    })();
  }, []);

  useEffect(() => {
    if (dadosIniciais.length) {
      setHasDados(true);
    } else {
      setHasDados(false);
    }
  }, [dadosIniciais]);

  return (
    <PageDefault paddingAll={0}>
      {hasDados ? (
        dadosIniciais.map((categoria, index) => {
          if (index === 0) {
            return (
              <>
                <BannerMain
                  videoTitle={categoria.videos[0].titulo}
                  url={categoria.videos[0].url}
                  videoDescription="O que é Front-end?"
                />
                <Carousel ignoreFirstVideo category={categoria} />
              </>
            );
          }
          return <Carousel key={generateId(index)} category={categoria} />;
        })
      ) : (
        <div>Carregando...</div>
      )}
    </PageDefault>
  );
}
