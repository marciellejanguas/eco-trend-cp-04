import { X, Plus, Minus } from "lucide-react";

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
              <p className="product-name">Vaso de Planta</p>
              <div className="product-quantity">
                <button><Minus /></button>
                <h3>1</h3>
                <button><Plus /></button>
              </div>
              <h3 className="product-total">R$ 25,00</h3>
            </div>

            <div className="carrinho-product">
              <img src="img/produtos/2.png" alt="" />
              <p className="product-name">Sacola Ecobag</p>
              <div className="product-quantity">
                <button><Minus /></button>
                <h3>2</h3>
                <button><Plus /></button>
              </div>
              <h3 className="product-total">R$ 290,00</h3>
            </div>

            <div className="carrinho-product">
              <img src="img/produtos/6.png" alt="" />
              <p className="product-name">Garrafa Térmica Inox</p>
              <div className="product-quantity">
                <button><Minus /></button>
                <h3>1</h3>
                <button><Plus /></button>
              </div>
              <h3 className="product-total">R$ 74,90</h3>
            </div> 
          </div>
        </div>

        <div className="carrinho-resumo">
          <div className="title">
            <h1>Resumo do carrinho</h1>
          </div>

          <div className="carrinho-resumo-container">
            <div>
              <h3>Subtotal</h3>
              <p>R$ 100,00</p>
            </div>

            <div>
              <h3>Desconto</h3>
              <p>R$ 0,00</p>
            </div>

            <div className="total">
              <h3>Total</h3>
              <p>R$ 100,00</p>
            </div>
            <button>Seguir com pagamento</button>
          </div>
        </div>
      </div>
    </section>
  );
}
