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

