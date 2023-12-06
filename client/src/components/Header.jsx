import React from 'react';
import shop from '../imgs/store.png'
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="container-flex-rotas">
        <img src={shop} alt="imagen logo" />
        <nav>
            <ul>
                <li>
                    <Link to="/" >
                        Acesso usuarios
                    </Link>
                </li>
                <li>
                    <Link to="/show">Mostrar Produtos</Link>
                </li>
                <li>
                    <Link to="/add">Adicionar Produto</Link>
                </li>
                <li>
                    <Link to="/edit">Editar Produto</Link>
                </li>
                <li>
                    <Link to="/delete">Apagar Produto</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default Header;