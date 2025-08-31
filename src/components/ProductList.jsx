import { useProducts } from "../hooks/useProducts";

export default function ProductList({ category, sort, adicionarAoCarrinho }) {
  const { data, loading, error } = useProducts({ category, sort });

  if (loading) return <div className="spinner" aria-busy="true">Carregando…</div>;
  if (error) return <p role="alert">Falha ao carregar: {error}</p>;
  if (!data.length) return <p>Nenhum produto encontrado.</p>;

  return (
    <section className="produtos">

      <div className="produtos-container">
        {data.map(p => (
          <div key={p.id} className="produto-card">
            <div className="produto-img">
              <img src={p.image} alt={p.name} />
            </div>
            <h2>{p.name}</h2>
            <p>R$ {p.price.toFixed(2).replace(".", ",")}</p>
            <button
              className="produto-card-button"
              onClick={() => {
                adicionarAoCarrinho(p);
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