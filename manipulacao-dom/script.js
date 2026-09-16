// // querySelectorAll pega todos os elementos
// const elementos = document.querySelectorAll(".texto");

// console.log(elementos);

// // Percorrendo a lista e pegando cada elemento "p"
// elementos.forEach(elemento => console.log(elemento));

// // Percorrendo a lista e pegando o texto
// elementos.forEach(elemento => console.log(elemento.innerText));

// // Alterando textos
// elementos.forEach(elemento => {
//     elemento.innerText = "Alterado";  //tem diferença de um pro outro ↓
//     //elemento.textContent = "Alterado";  //tem diferença de um pro outro ↑
// });

// // innerHTML - trocar as tags
// elementos.forEach(elemento => {
//     elemento.innerHTML = "<h2>Item</h2>";
// });

// // Trocar a cor do elemento
// elementos.forEach(elemento => {
//     elemento.style.color = "#0000ff";
// });

// *****************************************************************

// EVENTOS COM JS
// O que são eventos?... Ações do usuário.

// Evento "Click"
// const botao = document.getElementById("btn");

// botao.addEventListener("click", () => {
//     alert("Você clicou!");
// });

// *****************************************************************

// EVENTO DE DIGITAÇÃO (input / keyup)

// evento input -> dispara sempre que digita, em tempo real.
// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado");

// INPUT
// campo.addEventListener("input", () => {
//     // value -> o que está sendo digitado dentro do campo.
//     resultado.innerText = campo.value;
// });

// // KEYUP -> só dispara quando solta a tecla
// campo.addEventListener("keyup", () => {
//     // value -> o que está sendo digitado dentro do campo.
//     resultado.innerText = campo.value;
// });

// *****************************************************************

// EVENTO DE MOUSE
// const elemento = document.getElementById("troca-cor");
// const botao = document.getElementById("btn");

// // mouseover -> quando passar o mouse por cima
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#FF0000";
// })

// // mouseout -> quando o mouse sai
// elemento.addEventListener("mouseout", () => {
//     // elemento.style.backgroundColor = "#0000FF";
//     elemento.style.backgroundColor = "";
// })

// mousemove
// pegar a posição do mouse
// document.addEventListener("mousemove", (evento) => {
//     console.log(`Posição X: ${evento.clientX}, Posição Y: ${evento.clientY}`);
// })

// *****************************************************************

// // EVENTO DE FORMULÁRIO (submit)
// const form = document.querySelector("form");

// // comportamento padrão do formulário é recarregar a página
// form.addEventListener("submit", (evento) => {

//     //Impede o comportamento padrão do formulário
//     evento.preventDefault();

//     // pego a informação digitada no input com ".value"
//     const nome = document.getElementById("nome").value;
//     console.log(`Nome: ${nome}`);

// })

// Criando elementos na página

const novoElemento = document.createElement("p"); // cria o elemento <p>
novoElemento.innerText = "Elemento novo criado."; // cria um texto no elemento

const form = document.getElementById("form");

// estamos adicionando um elemento filho (p) dentro do pai (form)
form.appendChild(novoElemento);

// criando botão
const botao = document.createElement("button");
botao.innerText = "Excluir elemento";
form.appendChild(botao);

botao.addEventListener("click", (e) => {
    e.preventDefault();

    novoElemento.remove();

    // apagando direto do pai
    // form.removeChild(novoElemento);
})

// Adicionando elementos em uma lista, a partir de um input
const input = document.getElementById("input"); //input
const botao = document.getElementById("add"); //button
const lista = document.getElementById("lista"); // ul

botao.addEventListener("click", () => {
    const valorDigitado = input.value; //Pega o valor digitado na caixinha/input

    const li = document.createElement("li");
    li.innerText = valorDigitado;

    lista.appendChild(li);

    input.value = "";
})