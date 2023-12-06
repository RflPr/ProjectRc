import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAuth, signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import Header from "../components/Header";

const ShowProducts = () => {
  const auth = getAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/show-products");
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        alert(
          "Erro ao buscar produtos. Consulte o console para obter detalhes."
        );
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchProducts();
  }, []);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      
      setTimeout(() => {
        setLoggedOut(true);
      }, 60000);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      alert("Erro ao fazer logout. Consulte o console para obter detalhes.");
    } finally {
      
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="center-container-show">
      <Header />
      <h2>Lista de Produtos</h2>
      {loading && <p>Carregando...</p>}
      {!loading && (
        <>
          <div className="product-list-hor">
            {products.map((product) => (
              <Card className="custom-card">
                <Card.Body>
                  <div className="product-list-show">
                    <h6>Nome:</h6>
                    {product.name}
                  </div>
                  <div className="product-list-show">
                    <h6>Preço:</h6>
                    R${product.price}
                  </div>
                  <div className="product-list-show">
                    <h6>Descrição:</h6>
                    {product.description}
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </>
      )}
      <button onClick={handleLogout}>Logout</button>
      {loggedOut && <Navigate to="/" />}
    </div>
  );
};

export default ShowProducts;
