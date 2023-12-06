import React, { useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import Header from "../components/Header";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleAddProduct = async () => {
    try {
      await axios.post("http://localhost:5000/add-product", {
        name: productName,
        price: productPrice,
        description: productDescription,
      });
      alert("Produto adicionado com sucesso!");
      setProductName("");
      setProductPrice("");
      setProductDescription("");
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
      alert(
        "Erro ao adicionar produto. Consulte o console para obter detalhes."
      );
    }
  };

  return (
    <div className="center-container-add">
      <Header />
      <Card className="custom-card">
        <Card.Body>
          <h2>Adicionar Produto</h2>
          <div className="product-list-add">
            <label>Nome do Produto:</label>
            <input
              type="text"
              placeholder="Nome do Produto"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="product-list-add">
            <label>Preço do Produto:</label>
            <input
              type="text"
              placeholder="Preço do Produto"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className="product-list-add">
            <label>Descrição do Produto:</label>
            <textarea
            placeholder="Descrição do Produto"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>
          <div className="product-list-add">
            <button onClick={handleAddProduct}>Adicionar Produto</button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddProduct;
