import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';
import FormField from '../../../components/FormField';

export default function CadastroCategoria() {
  const [categoriaList, setCategoriaList] = useState([]);
  const [categoria, setCategoria] = useState({
    titulo: '',
    descricao: '',
    cor: '#000000',
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (categoria.titulo && categoria.descricao) {
      setCategoriaList([...categoriaList, categoria]);
    }
  }

  function handleChange(e) {
    function setValue(key, newValue) {
      setCategoria({ ...categoria, [key]: newValue });
    }
    const { value } = e.target;
    setValue(e.target.getAttribute('name'), value);
  }

  return (
    <>
      <PageDefault>
        <h1>Cadastrar categoria</h1>
        <div>
          <Link to="/">Ir para Home</Link>
        </div>
        <form
          onSubmit={handleSubmit}
          style={{ backgroundColor: categoria.cor }}
        >
          <FormField
            label="Nome da categoria"
            inputName="titulo"
            inputType="text"
            value={categoria.titulo}
            propOnChange={handleChange}
          />

          <FormField
            label="Descrição:"
            inputName="descricao"
            inputType="textarea"
            value={categoria.descricao}
            propOnChange={handleChange}
          />

          <FormField
            label="Cor da categoria:"
            inputName="cor"
            inputType="color"
            value={categoria.cor}
            propOnChange={handleChange}
          />
          <button type="submit">cadastrar</button>
        </form>
        <div>
          <p>Lista de categorias</p>
          <ul>
            {categoriaList.map(({ titulo }, index) => {
              return <li key={index}>{titulo}</li>;
            })}
          </ul>
        </div>
      </PageDefault>
    </>
  );
}