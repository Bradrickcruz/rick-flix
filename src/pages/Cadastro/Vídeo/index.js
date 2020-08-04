import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categories';

export default function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, formValue } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  });

  useEffect(() => {
    (async () => {
      setCategorias(await categoriasRepository.getAll());
      // categoriasRepository.getAll().then((categoriasFromServer) => {
      //   setCategorias(categoriasFromServer);
      // });
    })();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const categoriaEscolhida = categorias.find(
      // eslint-disable-next-line
      (categoria) => categoria.titulo === formValue.categoria
    );

    await videosRepository.create({
      titulo: formValue.titulo,
      url: formValue.url,
      categoriaId: categoriaEscolhida.id,
    });
    console.log('Cadastrou com sucesso!');
    history.push('/');
    // videosRepository
    //   .create({
    //     titulo: formValue.titulo,
    //     url: formValue.url,
    //     categoriaId: categoriaEscolhida.id,
    //   })
    //   .then(() => {
    //     // eslint-disable-next-line
    //     console.log('Cadastrou com sucesso!');
    //     history.push('/');
    //   });
  }

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título do Vídeo"
          inputName="titulo"
          value={formValue.titulo}
          propOnChange={handleChange}
        />

        <FormField
          label="URL"
          inputName="url"
          value={formValue.url}
          propOnChange={handleChange}
        />

        <FormField
          label="Categoria"
          inputName="categoria"
          value={formValue.categoria}
          propOnChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit" onClick={handleSubmit}>
          Cadastrar
        </Button>
      </form>

      <br />
      <br />

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}
