export default function FilterBar({ category, setCategory, sort, setSort }) {
  return (
    <section style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
      <label>
        Categoria:&nbsp;
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Todas</option>
          <option value="roupas">Roupas</option>
          <option value="beleza">Beleza</option>
          <option value="casa">Casa</option>
        </select>
      </label>

      <label>
        Ordenar preço:&nbsp;
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sem ordenação</option>
          <option value="asc">Crescente</option>
          <option value="desc">Decrescente</option>
        </select>
      </label>
    </section>
  );
}