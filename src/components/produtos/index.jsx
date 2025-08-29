export default function Produtos() {
  return (
    <section className="produtos">
      <h1>Produtos em Destaque</h1>

      <div className="produtos-container">
        <div className="produto-card">
          <div className="produto-img">
            <img src="img/produtos/1.png" alt="" />
          </div>
          <h2>Vaso de Planta</h2>
          <p>R$ 25,00</p>
          <button className="produto-card-button">Adicionar</button>
        </div>
        <div className="produto-card">
          <div className="produto-img">
            <img src="img/produtos/2.png" alt="" />
          </div>
          <h2>Sacola Ecobag</h2>
          <p>R$ 145,00</p>
          <button className="produto-card-button">Adicionar</button>
        </div>
        <div className="produto-card">
          <div className="produto-img">
            <img src="img/produtos/3.png" alt="" />
          </div>
          <h2>Escova de Dentes (Bambu)</h2>
          <p>R$ 15,00</p>
          <button className="produto-card-button">Adicionar</button>
        </div>
        <div className="produto-card">
          <div className="produto-img">
            <img src="img/produtos/4.png" alt="" />
          </div>
          <h2>Sabonete Ecológico</h2>
          <p>R$ 27,90</p>
          <button className="produto-card-button">Adicionar</button>
        </div>
        <div className="produto-card">
          <div className="produto-img">
            <img src="img/produtos/5.png" alt="" />
          </div>
          <h2>Caderno Reciclado (Nexa IT)</h2>
          <p>R$ 5,00</p>
          <button className="produto-card-button">Adicionar</button>
        </div>
        <div className="produto-card">
          <div className="produto-img">
            <img src="img/produtos/6.png" alt="" />
          </div>
          <h2>Garrafa Térmica Inox</h2>
          <p>R$ 74,90</p>
          <button className="produto-card-button">Adicionar</button>
        </div>
        <div className="produto-card">
          <div className="produto-img">
            <img src="img/produtos/7.png" alt="" />
          </div>
          <h2>Armação Óculos em Madeira</h2>
          <p>R$ 199,90</p>
          <button className="produto-card-button">Adicionar</button>
        </div>
        <div className="produto-card">
          <div className="produto-img">
            <img src="img/produtos/8.png" alt="" />
          </div>
          <h2>Carregador Solar Portátil</h2>
          <p>R$ 180,00</p>
          <button className="produto-card-button">Adicionar</button>
        </div>
      </div>
    </section>
  );
}
