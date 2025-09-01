import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Checkout() {
  const [loading, setLoading] = useState(false);

  function simularCheckout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const sucesso = Math.random() > 0.3;
        if (sucesso) {
          resolve("Pagamento aprovado!");
        } else {
          reject("Pagamento recusado!");
        }
      }, 2500);
    });
  }

  async function finalizarCompra() {
    setLoading(true);
    const botao = document.getElementById("confirmar-pagamento");
    botao.disabled = true
    
    try {
      const msg = await simularCheckout();
      console.log("Spinner OFF ");
      console.log(msg);
    } catch (err) {
      console.log("Spinner OFF");
      console.error(err);
    }
  }

  return (
    <section className="modal checkout" id="checkout">
      <div className="modal-container" id="modal-checkout">
        <button
          className="modal-close-button"
          onClick={() => {
            const divCheckout = document.getElementById("checkout");
            divCheckout.style["display"] = "none";
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="checkout-dados">
          <h1>Confirme seus dados</h1>
          <div className="field-container">
            <div className="field">
              <p>Primeiro Nome</p>
              <input type="text" placeholder="Digite seu primeiro nome" />
            </div>
            <div className="field">
              <p>Último Nome</p>
              <input type="text" placeholder="Digite seu último nome" />
            </div>
          </div>

          <div className="field">
            <p>CPF</p>
            <input type="text" placeholder="Digite seu CPF" />
          </div>

          <div className="field-container">
            <div className="field">
              <p>Endereço</p>
              <input type="text" placeholder="Digite seu endereço" />
            </div>
            <div className="field w30">
              <p>Número</p>
              <input type="text" placeholder="ex: 360" />
            </div>
          </div>

          <div className="field">
            <p>CEP</p>
            <input type="text" placeholder="Digite o CEP do endereço" />
          </div>

          <div className="field">
            <p>Telefone</p>
            <input type="text" placeholder="Digite seu telefone" />
          </div>
        </div>
        <div className="checkout-pagamento">
          <h1>Forma de pagamento</h1>

          <div className="field">
            <p>Forma de Pagamento</p>
            <select
              onChange={(event) => {
                const value = event.target.value;
                const credit = document.getElementById("pagamento-credit");
                const pix = document.getElementById("pagamento-pix");

                if (value == "credit") {
                  pix.style["display"] = "none";
                  credit.style["display"] = "flex";
                } else if (value == "pix") {
                  pix.style["display"] = "flex";
                  credit.style["display"] = "none";
                } else {
                  pix.style["display"] = "none";
                  credit.style["display"] = "none";
                }
              }}
            >
              <option value="">Selecione a forma de pagamento</option>
              <option value="credit">Cartão de Crédito</option>
              <option value="pix">PIX</option>
            </select>
          </div>

          <div className="efetuar-pagamento" id="pagamento-credit">
            <div className="field">
              <p>Número do Cartão</p>
              <input type="text" placeholder="Digite o número do cartão" />
            </div>

            <div className="field">
              <p>Nome do Titular</p>
              <input type="text" placeholder="Digite o nome do titular" />
            </div>

            <div className="field-container">
              <div className="field">
                <p>Validade</p>
                <input type="text" placeholder="ex: 09/2028" />
              </div>
              <div className="field">
                <p>CVV</p>
                <input type="text" placeholder="ex: 123" />
              </div>
            </div>

            <button
              id="confirmar-pagamento"
              onClick={() => {
                finalizarCompra();
              }}
            >
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} spin size="xl" />
              ) : (
                "Confirmar"
              )}
            </button>
          </div>

          <div className="efetuar-pagamento" id="pagamento-pix">
            <img src="img/qrcode.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
