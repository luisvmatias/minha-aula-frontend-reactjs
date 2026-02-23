
function App() {

    const disciplina = "Frontend com React";
    
    return (
      <div>
        <h1>Olá, turma!</h1>
        <p>Estamos iniciando a disciplina de <strong>{disciplina}</strong></p>
        <button onClick={() => alert('React é incrível!')}>
          Clique aqui...
        </button>
      </div>
    )
  
}

export default App
