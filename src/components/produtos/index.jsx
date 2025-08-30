export default function Produtos({ produtos, adicionarAoCarrinho }) {
  return (
    <section className="produtos">
      <h1>Produtos em Destaque</h1>

      <div className="produtos-container">
        {produtos.map((produto) => (
          <div key={produto.key} className="produto-card">
            <div className="produto-img">
              <img src={produto.imgUrl} alt="" />
            </div>
            <h2>{produto.nome}</h2>
            <p>R$ {produto.valor.toFixed(2).replace(".", ",")}</p>
            <button
              className="produto-card-button"
              onClick={() => {
                adicionarAoCarrinho(produto);
              }}
            >
              Adicionar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
