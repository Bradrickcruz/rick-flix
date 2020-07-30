import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';

export default function CadastroVideo() {
  return (
    <PageDefault>
      Página de cadastro de vídeo
      <div>
        <Link to="/cadastro/categoria">Nova Categoria</Link>
      </div>
    </PageDefault>
  );
}
