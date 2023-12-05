import React from 'react';
import shop from '../imgs/store.png'
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <div>
        <img src={shop} alt="imagen logo" />
        <nav>
            <ul>
                <li>
                    <Link to="/" >
                        criar Login/acessar conta
                    </Link>
                </li>
                <li>
                    <Link to="/show">mostrar todos os produtos</Link>
                </li>
                <li>
                    <Link to="/add">adicionar produto</Link>
                </li>
                <li>
                    <Link to="/edit">editar produto</Link>
                </li>
                <li>
                    <Link to="/delete">apagar produto</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default Header;