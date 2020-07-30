import React from 'react';
import logo from '../../assets/img/logo.png';
// import ButtonLink from './components/ButtonLink';
import { Button } from '../Button';
import './Menu.css';

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="logo" src={logo} alt="rickflix logo" />
      </a>
      {/* <ButtonLink href="/" className="ButtonLink">
        Novo vídeo
      </ButtonLink> */}
      <Button>Novo Vídeo</Button>
    </nav>
  );
}
