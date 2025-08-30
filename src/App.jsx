import { useState } from "react";
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";
import Header from "./components/header";
import Banner from "./components/banner";
import Produtos from "./components/produtos";
import Filtragem from "./components/filtragem";
import Carrinho from "./components/carrinho";
import Checkout from "./components/checkout";

export default function App() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const [carrinho, setCarrinho] = useState([]);

  const produtos = [
    {
      key: 1,
      nome: "Vaso de Planta",
      valor: 25,
      imgUrl: "img/produtos/1.png",
    },
    {
      key: 2,
      nome: "Sacola Ecobag",
      valor: 145,
      imgUrl: "img/produtos/2.png",
    },
    {
      key: 3,
      nome: "Escova de Dentes (Bambu)",
      valor: 15,
      imgUrl: "img/produtos/3.png",
    },
    {
      key: 4,
      nome: "Sabonete Ecológico",
      valor: 27.9,
      imgUrl: "img/produtos/4.png",
    },
    {
      key: 5,
      nome: "Caderno Reciclado (Nexa IT)",
      valor: 5,
      imgUrl: "img/produtos/5.png",
    },
    {
      key: 6,
      nome: "Garrafa Térmica Inox",
      valor: 74.9,
      imgUrl: "img/produtos/6.png",
    },
    {
      key: 7,
      nome: "Armação Óculos em Madeira",
      valor: 199.9,
      imgUrl: "img/produtos/7.png",
    },
    {
      key: 8,
      nome: "Carregador Solar Portátil",
      valor: 180,
      imgUrl: "img/produtos/8.png",
    },
  ];

  function adicionarAoCarrinho(produto) {
    const existingProduct = carrinho.find((p) => p.key === produto.key);

    if (existingProduct == undefined) {
      produto.quantidade = 1;
      setCarrinho([...carrinho, produto]);
    } else {
      const newCarrinho = carrinho.map((p) => {
        if (p.key == produto.key) {
          return {
            ...p,
            quantidade: p.quantidade + 1,
          };
        }
        return p;
      });
      setCarrinho(newCarrinho);
    }
  }

  function atualizarNoCarrinho(produto) {
    const newCarrinho = carrinho.map((p) => {
      if (p.key == produto.key) {
        return {
          ...p,
          quantidade: produto.quantidade,
        };
      }
      return p;
    });
    setCarrinho(newCarrinho);
  }

  function removerDoCarrinho(key) {
    const newCarrinho = carrinho.filter((p) => p.key != key);
    setCarrinho(newCarrinho);
  }

  return (
    <main>
      <div className="container">
        <Header carrinho={carrinho} />
        <Banner />
        <Produtos
          produtos={produtos}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
        <Filtragem />
        <Carrinho
          carrinho={carrinho}
          atualizarNoCarrinho={atualizarNoCarrinho}
          removerDoCarrinho={removerDoCarrinho}
        />
        <Checkout />

        <FilterBar
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />
        <ProductList category={category} sort={sort} />
      </div>
    </main>
  );
}
