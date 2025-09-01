import { useState } from "react";
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";
import Header from "./components/header";
import Banner from "./components/banner";
import Filtragem from "./components/filtragem";
import Carrinho from "./components/carrinho";
import Checkout from "./components/checkout";
import Popup from "./components/popup";
import { useEffect } from "react";
import CheckoutStatus from "./components/checkoutstatus";
import Sobre from "./components/sobre";
import Contato from "./components/contato";
import Footer from "./components/footer";

export default function App() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const [carrinho, setCarrinho] = useState(
    JSON.parse(localStorage.getItem("carrinho")) || []
  );
  const [popupTimeout, setPopupTimeout] = useState();

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]);

  function adicionarAoCarrinho(produto) {
    const existingProduct = carrinho.find((p) => p.id === produto.id);

    if (existingProduct == undefined) {
      produto.quantidade = 1;
      setCarrinho([...carrinho, produto]);
    } else {
      const newCarrinho = carrinho.map((p) => {
        if (p.id == produto.id) {
          return {
            ...p,
            quantidade: p.quantidade + 1,
          };
        }
        return p;
      });
      setCarrinho(newCarrinho);
    }

    mostrarPopup();
  }

  function atualizarNoCarrinho(produto) {
    const newCarrinho = carrinho.map((p) => {
      if (p.id == produto.id) {
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
    const newCarrinho = carrinho.filter((p) => p.id != key);
    setCarrinho(newCarrinho);
  }

  function mostrarPopup() {
    clearTimeout(popupTimeout);

    const popup = document.getElementById("popup");
    popup.style["bottom"] = "-200px";
    setTimeout(() => {
      popup.style["bottom"] = "10px";
    }, 50);
    setPopupTimeout(
      setTimeout(() => {
        popup.style["bottom"] = "-200px";
      }, 2000)
    );
  }

  return (
    <main>
      <div className="container">
        <Header carrinho={carrinho} />
        <Banner />
        <Filtragem
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />
        <ProductList
          category={category}
          sort={sort}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
        <Sobre />
        <Contato />

        <Carrinho
          carrinho={carrinho}
          atualizarNoCarrinho={atualizarNoCarrinho}
          removerDoCarrinho={removerDoCarrinho}
        />
        <Checkout />
        <CheckoutStatus />
        <Popup />
      </div>
      <Footer />
    </main>
  );
}
