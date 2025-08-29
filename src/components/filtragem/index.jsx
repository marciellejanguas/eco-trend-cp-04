export default function Filtragem() {
  return (
    <section className="filtragem">
      <div>
        <p>Ordenar preço</p>
        <select name="" id="">
          <option value="">Sem ordenação</option>
          <option value="">Crescente</option>
          <option value="">Decrescente</option>
        </select>
      </div>
      <div>
        <p>Valor mínimo</p>
        <input type="number" placeholder="ex: R$ 1,00" />
      </div>
      <div>
        <p>Valor máximo</p>
        <input type="number" placeholder="ex: R$ 100,00" />
      </div>
    </section>
  );
}
