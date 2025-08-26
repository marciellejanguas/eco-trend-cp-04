import { useProducts } from "../hooks/useProducts";

export default function ProductList({ category, sort }) {
  const { data, loading, error } = useProducts({ category, sort });

  if (loading) return <div className="spinner" aria-busy="true">Carregando…</div>;
  if (error)   return <p role="alert">Falha ao carregar: {error}</p>;
  if (!data.length) return <p>Nenhum produto encontrado.</p>;

  return (
    <ul className="grid">
      {data.map(p => (
        <li key={p.id} className="card">
          <img src={p.image} alt={p.name} className="thumb" />
          <h3>{p.name}</h3>
          <p>R$ {p.price.toFixed(2)}</p>
          <small>Categoria: {p.category}</small>
          <button>Adicionar</button>
        </li>
      ))}
    </ul>
  );
}