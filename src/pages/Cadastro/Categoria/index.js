import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

export default function CadastroCategoria() {
  const [categoriaList, setCategoriaList] = useState([]);
  const [hasCategorias, setHasCategorias] = useState(false);
  const [categoria, setCategoria] = useState({
    titulo: '',
    descricao: '',
    cor: '#000000',
  });

  useEffect(() => {
    async function getAllCategories() {
      const URLLocal = 'http://localhost:8080/categorias';
      const URL = 'https://rickflixdb.herokuapp.com/categorias';
      // let data = await fetch(URL);
      const a = window.location.hostname.includes('localhost') ? URLLocal : URL;
      console.log(a);
      let data = await fetch(a);
      data = await data.json();
      setCategoriaList([...data]);
    }
    getAllCategories();
  }, []);

  useEffect(() => {
    setHasCategorias(Boolean(categoriaList.length));
  }, [categoriaList]);

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
        {!hasCategorias ? (
          <div>Loading...</div>
        ) : (
          <div>
            <p>Lista de categorias</p>
            <ul>
              {categoriaList.map(({ id, nome }) => {
                console.log(`${id} - ${nome}`);
                return <li key={id}>{nome}</li>;
              })}
            </ul>
          </div>
        )}
      </PageDefault>
    </>
  );
}
