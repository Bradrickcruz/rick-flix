import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

import useForm from '../../../hooks/useForm';

export default function CadastroCategoria() {
  const initialValues = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };

  const [categoriaList, setCategoriaList] = useState([]);
  const [hasCategorias, setHasCategorias] = useState(false);
  const { formValue, handleChange, clearForm } = useForm(initialValues);

  useEffect(() => {
    async function getAllCategories() {
      const URLLocal = 'http://localhost:8080/categorias';
      const URL = 'https://rickflixdb.herokuapp.com/categorias';
      // let data = await fetch(URL);
      const a = window.location.hostname.includes('localhost') ? URLLocal : URL;
      let data = await fetch(a);
      data = await data.json();
      setCategoriaList([...data]);
    }
    getAllCategories();
  }, []);

  useEffect(() => {
    setHasCategorias(Boolean(categoriaList.length));
  }, [categoriaList]);

  function handleClick(e) {
    e.preventDefault();
    if (formValue.titulo && formValue.descricao) {
      setCategoriaList([...categoriaList, formValue]);
    }
    clearForm();
  }

  function generateId(text) {
    return `id_${text}`.replace(' ', '_');
  }

  return (
    <>
      <PageDefault>
        <h1>Cadastrar categoria</h1>

        <div>
          <Link to="/">Ir para Home</Link>
        </div>

        <form>
          <FormField
            label="Nome da categoria"
            inputName="titulo"
            inputType="text"
            value={formValue.titulo}
            propOnChange={handleChange}
          />

          <FormField
            label="Descrição"
            inputName="descricao"
            inputType="textarea"
            value={formValue.descricao}
            propOnChange={handleChange}
          />

          <FormField
            label="Cor da categoria"
            inputName="cor"
            inputType="color"
            value={formValue.cor}
            propOnChange={handleChange}
          />
          <Button type="submit" onClick={handleClick}>
            cadastrar
          </Button>
        </form>
        {!hasCategorias ? (
          <div>Loading...</div>
        ) : (
          <div>
            <p>Lista de categorias</p>
            <ul>
              {categoriaList.map(({ titulo }) => (
                <li key={generateId(titulo)}>{titulo}</li>
              ))}
            </ul>
          </div>
        )}
      </PageDefault>
    </>
  );
}
