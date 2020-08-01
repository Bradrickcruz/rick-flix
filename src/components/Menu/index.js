import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import logo from '../../assets/img/logo.png';

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="rickflix logo" />
      </a>
      {/* <ButtonLink href="/" className="ButtonLink">
        Novo vídeo
      </ButtonLink> */}
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}
