import React from 'react';
import Logo from '../../assets/imagens/Logo.png'
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';
import './Menu.css';
function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="Logo da pagina Johnflix"></img>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video Da série johnflix
            </Button>
        </nav>
    );
}

export default Menu;