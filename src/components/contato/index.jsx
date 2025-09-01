export default function Contato() {
  return (
    <section className="contato">
      <h1>Fale Conosco</h1>
      <form>
        <div className="field">
          <p>Nome Completo</p>
          <input type="text" placeholder="Digite seu nome completo" />
        </div>
        <div className="field">
          <p>E-mail</p>
          <input type="text" placeholder="Digite seu e-mail" />
        </div>
        <div className="field">
          <p>Assunto</p>
          <input type="text" placeholder="Digite o assunto da mensagem" />
        </div>
        <div className="field">
          <p>Mensagem</p>
          <textarea
            name=""
            id=""
            placeholder="Digite sua mensagem aqui..."
          ></textarea>
        </div>
        <button>Enviar</button>
      </form>
    </section>
  );
}
