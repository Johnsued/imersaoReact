import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imagens/Logo.png'
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';
import './Menu.css';
function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo} alt="Logo da pagina Johnflix"></img>
            </Link>

            <Button as={Link }className="ButtonLink" to="/cadastro/video">
                New Video
            </Button>
        </nav>
    );
}

export default Menu;