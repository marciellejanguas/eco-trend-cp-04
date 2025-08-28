import { ShoppingCart } from "lucide-react";

export default function Header() {
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
        <button id="cart-button">
          <ShoppingCart />
        </button>
        <button id="login-button">Login</button>
      </div>
    </header>
  );
}
