import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';

export default function CadastroCategoria() {
  return (
    <>
      <PageDefault>
        <h1>Cadastrar categoria</h1>
        <form>
          <label>
            Nome da categoria:
            <input type="text" />
          </label>
          <button>cadastrar</button>
        </form>
        <div>
          <Link to="/">Ir para Home</Link>
        </div>
      </PageDefault>
    </>
  );
}
