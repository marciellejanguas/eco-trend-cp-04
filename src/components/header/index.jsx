import { ShoppingCart } from "lucide-react";

export default function Header({ carrinho }) {
  return (
    <header>
      <h1>
        <p className="green">Eco</p>Trend.
      </h1>

      <div className="header-links">
        <a href="" className="selected">
          Home
        </a>
        <a href="">Produtos</a>
        <a href="">Sobre</a>
        <a href="">Contato</a>
      </div>

      <div className="header-buttons">
        <button
          id="cart-button"
          onClick={() => {
            const divCarrinho = document.getElementById("carrinho");
            const modais = document.querySelectorAll(".modal-container");
            divCarrinho.style["display"] = "flex";
            modais.forEach((modal) => {
              modal.style["top"] = "-200%";
              setTimeout(() => {
                modal.style["top"] = 0;
              }, 100);
            });
          }}
        >
          <p>{carrinho.length}</p>
          <ShoppingCart />
        </button>
        <button id="login-button">Login</button>
      </div>
    </header>
  );
}
