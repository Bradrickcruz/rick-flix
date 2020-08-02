import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

export default function CadastroCategoria() {
  const [categoriaList, setCategoriaList] = useState([]);
  const [categoria, setCategoria] = useState({
    titulo: '',
    descricao: '',
    cor: '#000000',
  });

  useEffect(() => {
    async function getAllCategories() {
      const URLLocal = 'http://localhost:8080/categorias';
      const URL = 'https://rickflixdb.herokuapp.com/';
      let data = await fetch(
        // eslint-disable-next-line
        window.location.hostname.includes('localhost') ? URLLocal : URL
      );
      data = await data.json();
      setCategoriaList([...data]);
    }
    getAllCategories();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (categoria.titulo && categoria.descricao) {
      setCategoriaList([...categoriaList, categoria]);
    }
  }

  function handleChange({ target }) {
    function setValue(key, newValue) {
      setCategoria({ ...categoria, [key]: newValue });
    }
    const { value } = target;
    setValue(target.getAttribute('name'), value);
  }

  return (
    <>
      <PageDefault>
        <h1>Cadastrar categoria</h1>
        <div>
          <Link to="/">Ir para Home</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <FormField
            label="Nome da categoria"
            inputName="titulo"
            inputType="text"
            value={categoria.titulo}
            propOnChange={handleChange}
          />

          <FormField
            label="Descrição"
            inputName="descricao"
            inputType="textarea"
            value={categoria.descricao}
            propOnChange={handleChange}
          />

          <FormField
            label="Cor da categoria"
            inputName="cor"
            inputType="color"
            value={categoria.cor}
            propOnChange={handleChange}
          />
          <Button type="submit">cadastrar</Button>
        </form>
        {categoriaList.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div>
            <p>Lista de categorias</p>
            <ul>
              {categoriaList.map(({ nome }, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>{nome}</li>
              ))}
            </ul>
          </div>
        )}
      </PageDefault>
    </>
  );
}
