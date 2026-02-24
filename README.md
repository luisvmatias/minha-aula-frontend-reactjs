# 🚀 Introdução ao Frontend com ReactJS

Este repositório contém o roteiro da nossa primeira aula de React. Vamos aprender a transição do JavaScript tradicional para o desenvolvimento moderno baseado em componentes.

---

## 1. O Problema: Manipulação Manual do DOM
No JavaScript puro (Vanilla), para atualizar um elemento, precisamos ser **imperativos**:
1. Buscar o elemento (`document.getElementById`).
2. Adicionar um escutador de eventos (`addEventListener`).
3. Alterar o conteúdo manualmente (`innerText` ou `innerHTML`).

**O Problema:** Em aplicações grandes, isso se torna difícil de manter e propenso a erros.

## 2. A Solução: O Modelo Declarativo do React
O React cuida das atualizações para você. Em vez de dizer *como* o navegador deve mudar, você apenas declara *o que* quer ver na tela com base no **Estado** da aplicação.

* **Componentização:** A interface é dividida em pequenas peças de "Lego" (Componentes) independentes e reutilizáveis.
* **JSX:** Uma sintaxe que permite escrever o que parece HTML dentro do seu código JavaScript.

---

## 3. Configuração do Ambiente e "Faxina" Inicial

Para iniciar o projeto, utilizamos o **Vite** pela sua velocidade:

```bash
npm create vite@latest minha-aula -- --template react
cd minha-aula
npm install
npm run dev
```

⚠️ Guia de Sobrevivência: Erros Comuns de Iniciante no React.
Se o seu código não está rodando ou a tela ficou branca, não entre em pânico! Verifique esta lista antes de chamar o professor:

## 1. O Elemento Pai Único (The Fragment Error).
No React, um componente precisa retornar apenas um elemento "pai". Você não pode retornar duas tags soltas.

❌ Errado:

JavaScript
```jsx
return (
  <h1>Título</h1>
  <p>Subtítulo</p>
);
```
✅ Certo (Envolva em uma div ou em um Fragment <>):

JavaScript
```jsx
return (
  <>
    <h1>Título</h1>
    <p>Subtítulo</p>
  </>
);
```
## 2. Componentes com Letra Minúscula.
O React diferencia tags HTML de componentes pela capitalização. Se começar com letra minúscula, o React acha que é uma tag HTML que ainda não existe (como 
```jsx
<botao />  em vez de  <Botao />).
```

❌ Errado:  
```jsx 
function meuComponente(){ ... } 
```

✅ Certo: 
```jsx
function MeuComponente(){ ... }
```

## 3. Esquecer o export ou import
Se você criou um componente em um arquivo novo, você precisa exportá-lo, e no arquivo onde vai usá-lo, você precisa importá-lo com o caminho correto.

Dica: Verifique sempre se o caminho no import está como ./NomeDoArquivo. O ./ diz que o arquivo está na mesma pasta.

## 4. Usar class em vez de className
Como o React usa JavaScript e a palavra class já serve para criar Classes no JS, o React usa className para classes de CSS.

❌ Errado: 
```jsx
<div class="container">

✅ Certo: <div className="container">
```
## 5. Tentar renderizar Objetos Inteiros
O React sabe renderizar textos, números e listas, mas ele trava se você tentar colocar um objeto inteiro dentro do HTML.
```jsx
❌ Errado: 
const usuario = { nome: "João", idade: 20 };
return <p>{usuario}</p>; // Vai dar erro: "Objects are not valid as a React child"
```

✅ **Certo (Acesse a propriedade específica):**
```jsx
return <p>{usuario.nome}</p>;
```

## 6. Erro de Case no onClick
No HTML é onclick. No React é CamelCase.

```jsx
❌ Errado: <button onclick={clicou}>

✅ Certo: <button onClick={clicou}>

💡 Dica de Ouro: O Console do Navegador
Se a tela ficar branca, aperte F12 e vá na aba Console. O React é muito bom em dizer exatamente em qual linha você errou, mas ele faz isso por lá!
```
## 1: O Conceito de Props (Propriedades)
- **O que são**? São informações passadas de um "Componente Pai" para um "Componente Filho".
- **Imutabilidade**: As props são somente leitura. O filho as recebe e usa, mas não pode alterá-las.
- **Analogia**: Pense em uma função soma(a, b). Os valores de a e b são as props da função.
--  **Utilidade**: Permite criar componentes genéricos (Ex: um botão azul e um botão vermelho usando o mesmo código).

## 2: O Conceito de State (Estado) com useState
- **O que é**? É a "memória" do componente. Dados que, ao mudarem, fazem o React re-renderizar (desenhar novamente) a tela.
- **O Hook useState:** É uma função especial que nos devolve duas coisas:
    - O valor atual do estado.
    - Uma função para atualizar esse valor.

**Regra de Ouro:** Nunca altere o estado diretamente (estado = novoValor). Use sempre a função de atualização.

## 3: Renderização de Listas
- **O Problema:** Como exibir 100 produtos sem escrever 100 componentes manualmente?
- **A Solução:** Usar o método .map() do JavaScript para percorrer um Array e retornar um componente para cada item.
- **A Prop key:** O React exige que cada item de uma lista tenha um identificador único (key) para que ele saiba exatamente qual item atualizar se algo mudar.

### 📝 Exercício Prático: Vitrine de Produtos
1. Crie um array de objetos chamado `produtos` (com nome e preço).
2. Crie um componente chamado `Produto.jsx` que recebe essas informações via props.
3. No `App.jsx`, use o `.map()` para exibir todos os produtos na tela.
4. Adicione um botão "Carrinho" que, ao ser clicado, usa o `useState` para mostrar quantas vezes o produto foi adicionado.