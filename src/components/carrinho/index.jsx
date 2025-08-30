import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Carrinho({
  carrinho,
  atualizarNoCarrinho,
  removerDoCarrinho,
}) {
  const valorTotal = carrinho.reduce((sum, curr) => {
    return sum + curr.valor * curr.quantidade;
  }, 0);

  return (
    <section className="modal carrinho" id="carrinho">
      <div className="modal-container" id="modal-carrinho">
        <button
          className="modal-close-button"
          onClick={() => {
            const divCarrinho = document.getElementById("carrinho");
            divCarrinho.style["display"] = "none";
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="carrinho-products">
          <div className="title">
            <h1>Meu carrinho</h1>
            <p>({carrinho.length} itens)</p>
          </div>
          <div className="carrinho-products-list">
            {carrinho.map((produto) => (
              <div className="carrinho-product" key={produto.key}>
                <img src={produto.imgUrl} alt="" />
                <p className="product-name">{produto.nome}</p>
                <div className="product-quantity">
                  <button
                    onClick={() => {
                      if (produto.quantidade > 1) {
                        produto.quantidade--;
                        atualizarNoCarrinho(produto);
                      } else {
                        let result = confirm(
                          "Tem certeza que deseja remover do carrinho?"
                        );
                        if (result) {
                          removerDoCarrinho(produto.key);
                        }
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faMinus} size="lg" />
                  </button>
                  <h3>{produto.quantidade}</h3>
                  <button
                    onClick={() => {
                      produto.quantidade++;
                      atualizarNoCarrinho(produto);
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} size="lg" />
                  </button>
                </div>
                <h3 className="product-total">
                  R${" "}
                  {(produto.valor * produto.quantidade)
                    .toFixed(2)
                    .replace(".", ",")}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="carrinho-resumo">
          <div className="title">
            <h1>Resumo do carrinho</h1>
          </div>

          <div className="carrinho-resumo-container">
            <div>
              <h3>Subtotal</h3>
              <p>R$ {valorTotal.toFixed(2).replace(".", ",")}</p>
            </div>

            <div>
              <h3>Desconto</h3>
              <p>R$ 0,00</p>
            </div>

            <div className="frete">
              <h3>Frete</h3>
              <p>Grátis</p>
            </div>

            <div className="total">
              <h3>Total</h3>
              <p>R$ {valorTotal.toFixed(2).replace(".", ",")}</p>
            </div>
            <button
              onClick={() => {
                const divCarrinho = document.getElementById("carrinho");
                const divCheckout = document.getElementById("checkout");
                const modais = document.querySelectorAll(".modal-container");
                divCarrinho.style["display"] = "none";
                divCheckout.style["display"] = "flex";
                modais.forEach((modal) => {
                  modal.style["top"] = "-200%";
                  setInterval(() => {
                    modal.style["top"] = 0;
                  }, 100);
                });
              }}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
