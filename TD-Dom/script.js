const element = document.querySelector('h1').innerHTML;
console.log(element);
const elemen2 = document.querySelector('h2');
console.log(elemen2);
const element3 = document.querySelector('h3');
console.log(element3);
const elementlist = document.querySelector('item-liste');
console.log(elementlist);

const elementParent = document.getElementsByTagName('ul');
const parent = elementParent[0].parentElement;
console.log(parent);

const elementPre = document.querySelector('.item2');
console.log(elementPre.previousElementSibling);

const titre = document.querySelector('.premier-titre');
titre.style.color = '#FFBB54';

const list = document.querySelector('ul');
const list5 = document.createElement('li');
list5.innerHTML = "Lorem 5";
list.appendChild(list5);

const liste = document.querySelectorAll('.item-liste');
console.log(liste);
children2 = liste.children[0];
console.log(children2);