import { X } from "lucide-react";

export default function Carrinho() {
  return (
    <section className="carrinho">
      <div className="carrinho-container">
        <button className="carrinho-close-button">
          <X />
        </button>
        <div className="carrinho-products">
          <div className="title">
            <h1>Meu carrinho</h1>
            <p>(3 itens)</p>
          </div>
          <div className="carrinho-products-list">
            <div className="carrinho-product">
              <img src="img/produtos/1.png" alt="" />
            </div>
          </div>
        </div>

        <div className="carrinho-resumo">
          <div className="title">
            <h1>Resumo do carrinho</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
