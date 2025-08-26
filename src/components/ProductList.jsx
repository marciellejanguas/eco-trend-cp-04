import { useProducts } from "../hooks/useProducts";

export default function ProductList() {
  const { data, loading, error } = useProducts();

  if (loading) return <div className="spinner" aria-busy="true">Carregando…</div>;
  if (error)   return <p role="alert">Falha ao carregar: {error}</p>;
  if (!data.length) return <p>Nenhum produto encontrado.</p>;

  return (
    <ul>
      {data.map((p) => (
        <li key={p.id}>
          {p.name} — R$ {p.price.toFixed(2)}
        </li>
      ))}
    </ul>
  );
}