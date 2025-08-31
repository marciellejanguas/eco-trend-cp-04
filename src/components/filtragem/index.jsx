export default function Filtragem({category, setCategory, sort, setSort}) {
  return (
    <section className="filtragem">
      <div>
        <p>Ordenar preço</p>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sem ordenação</option>
          <option value="asc">Crescente</option>
          <option value="desc">Decrescente</option>
        </select>
      </div>
{/*       
      <div>
        <p>Valor mínimo</p>
        <input type="number" placeholder="ex: R$ 1,00" />
      </div>
      <div>
        <p>Valor máximo</p>
        <input type="number" placeholder="ex: R$ 100,00" />
      </div> */}
      <div>
        <p>Categoria</p>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Todas</option>
          <option value="roupas">Roupas</option>
          <option value="beleza">Beleza</option>
          <option value="casa">Casa</option>
        </select>
      </div>
    </section>
  );
}
