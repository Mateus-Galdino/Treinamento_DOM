// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

/* 

                                        Minhas edições começam a partir daqui 

*/

// Examinando o documento com a propriedade document

console.log(document.domain); // Acesando os elementos do documento index.html
console.log(document.URL); // Acessando a URL
console.log(document.title); // Acessando o título do documento
// document.title = '123' Alterando o título do documento
console.log(document.doctype); // Acessando o tipo do documento
console.log(document.head); // Acessando a head do documento
console.log(document.body);
console.log(document.all)

// Propriedade getElementById: pega o elemento de acordo com seu ID na estrutura HTML //

console.log(document.getElementById('header-title')); // Pega o elemento de id header-title
var headerTitle= document.getElementById('header-title'); // Também é possível associar este valor a variáveis
var header= document.getElementById('main-header');
headerTitle.textContent = 'Site do Mateus'; // Alterando o texto através da estrutura DOM
headerTitle.innerText = 'Texto interno'; // Alterando a propriedade de texto interno
headerTitle.innerHTML = '<h3>Interno</h3>'; // Adicionando um HTML interno ao header-title
header.style.borderBottom = '3px solid #000'

// Pegando elementos pelo nome da classe (class-name) // 

var items = document.getElementsByClassName('list-group-item'); // Acessando os elemntos de uma lista por sua classe
console.log(items);
console.log(items[1]); //Acessando o elemento de índex 1 da lista
items[1].textContent = 'Este é o item alterado'; // Alterando o texto deste item
items[1].style.fontWeight = 'bold'; // Colocando o texto do item em negrito
items[1].style.backgroundColor = 'blue' // Alterando a cor de fundo. É IMPOSSÍVEL MUDAR TODOS DE UMA VEZ SEM UM FOR

function mudarCorItems () {}
    for (var i = 0; i<items.length;i++){
        if (i % 2 == 0 && i != 0 | i == 1) {
        items[i].style.fontWeight = 'bold';
        items[i].style.backgroundColor = 'blue'
    } else if (i % 2 == 1) {
        items[i].style.fontWeight = 'none';
        items[i].style.backgroundColor = 'green'
    } else {
        items[i].style.fontWeight = 'bold';
        items[i].style.backgroundColor = 'blue'
    }

}; //O laço for permite mudanças ao longo de toda a classe

// Propriedade getElementByTagName //

var li = document.getElementsByTagName('li') // Mesmo processo do getElementByClassName, faz as mesmas coisas

// Propriedade querySelector - propriedade mais genérica, aceita qualquer parâmetro (classe, id, tag) //

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px grey';

var input = document.querySelector('input');
input.value = 'Meu nome'; // Alterando o valor do campo de input

var submit = document.querySelector('input[type = "submit"]');
submit.value = 'Send' // Alterando o texto do botão;

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'navy'; // Alterando o valor do último elemento da lista

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'red'; // Alterando o valor do segundo elemento da lista

// Propriedade querySelectorAll //

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Meu formulário';

var odd = document.querySelectorAll('li:nth-child(odd)');

for (var i = 0 ; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'grey'
} // Alterando todos os elementos de índice par da lista

// Acessando parents e siblings  //

var itemList = document.querySelector('#items');

itemList.parentNode.style.backgroundColor = 'grey' // Alterando a div de nível superior da classe items

var itemList = document.querySelector('#items');

itemList.parentElement.style.backgroundColor = 'grey' // Alterando a div de nível superior da classe items

itemList.children[1].style.backgroundColor = 'yellow' // Acessando os elementos filhos do id items

itemList.firstElementChild.textContent = 'Mudando o nome do primeiro filho' // Acessando o primeiro elemento filho

// Criando elementos com a função Create Element e estilizando - os//

var newDiv = document.createElement('div'); // Criando uma nova div
newDiv.className = 'Hello';
newDiv.id = 'Hello_1';
newDiv.setAttribute('title','Hello Div');

var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header .h1');

container.insertBefore(newDiv,h1);

newDiv.style.fontSize = '30px' // Não deu certo, rever essa parte

// EventListener: coletando ações do usuário

function buttonClick(e) {
    console.log('Botão pressionado');
    document.getElementById("header-title").textContent = 'Mudei o texto por Event Listener';
    console.log(e.target);
    console.log(e.target.id);
};

var Button = document.getElementById('button').addEventListener('click',buttonClick);

console.log('456')



