import { useState } from "react";
import Produto from "./components/Produto";

function App() {
  // 1. Conceito de State: Criando um contador de curtidas geral
  const [totalCurtidas, setTotalCurtidas] = useState(0);

  // 2. Conceito de Listas: Array de objetos (simulando um banco de dados)
  const listaProdutos = [
    { id: 1, nome: "Teclado mecânico", preco: 250 },
    { id: 2, nome: "Mouse Gamer", preco: 150 },
    { id: 3, nome: "Monitor 144hz", preco: 1250 },
  ];
  return (
    <div>
      <h1>Minha loja React</h1>

      <h3>Total de curtidas na loja: {totalCurtidas}</h3>
      <button onClick={() => setTotalCurtidas(totalCurtidas + 1)}>
        Curtir Loja
      </button>

      <hr />

      <h2>Nossos Produtos:</h2>
      {/** 3. Renderização da Listas usando .map() */}
      <div>
        {listaProdutos.map((item) => (
          <Produto 
            key={item.id}
            nome={item.nome}
            preco={item.preco}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
