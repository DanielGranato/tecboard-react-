import './App.css'

function FormularioDeEvento() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h1>Preencha para criar um evento:</h1>

      <div className="form-fields">
        <div className="form-field">
          <label htmlFor="event-name">Qual o nome do evento?</label>
          <input
            id="event-name"
            name="eventName"
            type="text"
            placeholder="Summer dev hits"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="event-date">Data do evento</label>
          <input
            id="event-date"
            name="eventDate"
            type="text"
            placeholder="XX/XX/XXXX"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="event-theme">Tema do evento</label>
          <select id="event-theme" name="eventTheme" defaultValue="" required>
            <option value="" disabled>
              Selecione uma opção
            </option>
            <option value="frontend">Front-end</option>
            <option value="backend">Back-end</option>
            <option value="fullstack">Full Stack</option>
          </select>
        </div>
      </div>

      <button type="submit">Criar evento</button>
    </form>
  )
}

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo Tecboard" />
      </header>
      <section>
        <img src="/banner.png" alt="Banner Tecboard" />
        <FormularioDeEvento />
      </section>
    </main>
  )
}

export default App
