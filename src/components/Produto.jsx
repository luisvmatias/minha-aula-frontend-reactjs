// Este componente recebe "props" como argumento
function Produto({nome, preco}){
    return(
        <div style={{border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '8px'}}>
            <h3>{nome}</h3>
            <p>Preço: R$ {preco}</p>
        </div>
    )
}

export default Produto;