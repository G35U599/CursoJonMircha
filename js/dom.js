/*******************Javascript****************************/

//   console.log(window);
//   console.log(document);

//   let texto = "Hola, Dios te bendiga";

//   const hablar = (texto) => {
//   speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
//   };

//   hablar(texto);

console.log("************** Elementos del Documento ***************");
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.characterSet);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.scripts);
// setTimeout(() => console.log(document.getSelection().toString()), 3000);
// document.write("<h2>Hola mundo desde el DOM</h2>");
//setTimeout(() => document.write("<h1>Hola, Dios te bendiga mucho<h1>"), 10000);

/////////////////62 - DOM_ Nodos, Elementos y Selectores///////////////////////

//para capturar los elementos

//en desuso
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

//actuales
console.log(document.querySelector(".cards"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((element) => console.log(element));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll("#menu li"));
console.log(document.querySelector("#menu li"));
console.clear();

/**************** 063 - DOM_ Atributos y Data-Attributes *********************/

//getAttribute, setAttribute, hasAttribute

// console.log(document.documentELement)
//console.log(document.documentElement.getAttribute("lang"));
// console.log(document.querySelector(".link-dom").href);
// console.log(document.querySelector(".link-dom").getAttribute("href"));
// document.documentElement.lang = "en";
// document.documentElement.setAttribute("lang", "es-mx");

// const $LinkDOM = document.querySelector(".link-dom");
// console.log($LinkDOM);
// $LinkDOM.setAttribute("target", "_blank");
// $LinkDOM.setAttribute("rel", "noopener");
// $LinkDOM.setAttribute("href", "http://youtube.com");
// console.log($LinkDOM.hasAttribute("target"));
// $LinkDOM.removeAttribute("target");
// console.log($LinkDOM.hasAttribute("target"));

// //Data-attributes

// console.log($LinkDOM.getAttribute("data-description"));
// console.log($LinkDOM.dataset);
// console.log($LinkDOM.dataset.description);
// $LinkDOM.setAttribute("data-description", "Modelo de Objetos del Documento");
// console.log($LinkDOM.getAttribute("data-description"));
// //.serAttribute("data-description", "") = dataset.descripto
// $LinkDOM.dataset.description="Dios te bendiga";
// console.log($LinkDOM.dataset.description);
// document.documentElement.lang;

/***************** 064 - DOM_ Estilos y Variables CSS *********************/
/*
.style
get.Computed.Style
.getAttribute

*/

const $LinkDOM = document.querySelector(".link-dom");
console.log($LinkDOM.style);
console.log($LinkDOM.getAttribute("style"));
console.log(document.getElementsByName("placeholder"));
console.log($LinkDOM.style.backgroundColor);
console.log($LinkDOM.style.color);
console.log(window.getComputedStyle($LinkDOM));
console.log(getComputedStyle($LinkDOM).getPropertyValue("color", "33"));
//console.log($LinkDOM.setAttribute("style", "background-color:grey"));
$LinkDOM.style.setProperty("text-decoration", "none");
// $LinkDOM.style.setProperty ;
// $LinkDOM.style.width = "50%";
$LinkDOM.style.textAlign = "center";
$LinkDOM.style.marginLeft = "auto";
$LinkDOM.style.marginRight = "auto";
// $LinkDOM.style.padding = "1rem";
// $LinkDOM.style.borderRadius = ".5rem";
console.log($LinkDOM.getAttribute("style"));
console.log($LinkDOM.style);
console.clear();

///////////////variables CSS - Custom Properties CSS
//etiqueta html
// const $html = document.documentElement,
//   $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
//   varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color"),
//   varLightColor = getComputedStyle($html).getPropertyValue("--light-color");

// console.log(varDarkColor, varYellowColor);
// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

// $html.style.setProperty("--dark-color", "#000");

// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// $body.style.setProperty("backgroundColor", varDarkColor);

// console.clear();

///////////////////////// 65 DOM_Clases CSS /////////////////////////
// const $card = document.querySelector(".card");

// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// //para saber si contiene la clase
// console.log($card.classList.contains("rotate-45"));
// $card.classList.add("rotate-45");
// $card.classList.remove("rotate-45");
// $card.classList.toggle("rotate-45");
// $card.classList.toggle("rotate-45");
// $card.classList.toggle("rotate-45");
// $card.classList.replace("rotate-45", "rotate-135");
// $card.classList.remove("rotate-135");
// $card.classList.add("opacity-80", "sepia");
// $card.classList.remove("opacity-80", "sepia");
// //clase(document.querySelector(".clase")).classList --> trabajr con el css en las clases.
// $card.classList.toggle("opacity-80", "sepia");
// $card.classList.toggle("opacity-80","sepia");
// console.log($card.className);
// console.log($card.classList);
// $card.classList.add("sepia", "rotate-45");
// $card.classList.remove("sepia", "rotate-45");

// const $body = document.body;
// $body.style.marginTop = "10000 rem";

// ////////////////////////////////// 066 - DOM_ Texto y HTML /////////////////////////////
// const $DOM = document.getElementById("que-es");

// let text = `<p>Dios te bendiga</p>`;

// $DOM.innerHTML = text;
// $DOM.outerHTML = text;

//////////////////////////////////// 067 - DOM Traversing_ Recorriendo el DOM ///////////////////////////
// const $cards = document.querySelector(".cards");
// console.log($cards.parentElement);
// console.log($cards.children[0]);
// console.log($cards.parentElement);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousElementSibling);
// console.log($cards.nextElementSibling);
// console.log($cards.closest("body"));
// console.log($cards.children[3].closest("section"));
// $cards.children[1].classList.add("sepia");
// $cards.children[1].classList.remove("sepia");
// console.clear();

//////////////////////////////////////////068 - DOM_ Creando Elementos y Fragmentos/////////////////////////////////////////////////////////
// const   $figure = document.createElement("figure"),
//         $figure2 = document.createElement("figure"),
//         $img = document.createElement("img"),
//         $figcaption = document.createElement("figcaption"),
//         $figcaptionText = document.createTextNode("one piece"),
//         // $cards = document.querySelector(".cards");

//         $img.setAttribute("src","./recursos/medias/10582-luffy-one-piece-1920x1080-anime-wallpaper.jpg");
//         $img.setAttribute("alt", "Luffy");

//         $figcaption.appendChild($figcaptionText); //para asignar un hijo
//         $figure.appendChild($img);
//         $figure.appendChild($figcaption);
//         $figure.classList.add("card");

//         $cards.appendChild($figure);

//         $figure2.innerHTML=`
//         <img src="./recursos/medias/20 (4).jpg">
//         <figcaption>Anime</figcaption>
//         `;
//         $figure2.classList.add("card");//para adicionar un clase desde js
//         $cards.appendChild($figure2);

/***************************************** */
// const estaciones = ["primavera", "verano", "otoño", "invierno"];
// $ul = document.createElement("ul"),
// // $li = document.createElement("li");
// // $li.appendChild(...estaciones);
// // $ul.appendChild($li);
// document.write("<h3>Estaciones del año</h3>");
// document.body.appendChild($ul);

// estaciones.forEach(element => {
//         const $li = document.createElement("li");
//         $li.textContent = element;
//         $ul.appendChild($li);

// });

// const continentes = ["africa", "america", "asia", "europa", "oceanía"];
// $ul2 = document.createElement("ul");

// document.write("<h3>Continentes del Mundo</3>");
// document.body.appendChild($ul2);

// // continentes.forEach(e =>{
// //         const $li = document.createElement("li");
// //         $li.textContent = e;
// //         $ul2.appendChild($li);
// // });

// $ul2.innerHTML="";
// continentes.forEach(e => $ul2.innerHTML += `<li>${e}</li>`);

// const meses = [
//         "Enero",
//         "Febrero",
//         "Marzo",
//         "Abril",
//         "Mayo",
//         "Junio",
//         "Julio",
//         "Agosto",
//         "Septiembre",
//         "Octubre",
//         "Noviembre",
//         "Diciembre"
// ];

// $ul3 = document.createElement("ul");
// $fragment = document.createDocumentFragment();

// document.write("<h3>Meses del Anio</h3>");
// document.body.appendChild($ul3);

// meses.forEach(e => {
//         $li =document.createElement("li");
//         $li.textContent= e;
//         $fragment.appendChild($li);
// });
// $ul3.appendChild($fragment);

/**************************************069 - DOM_ Templates HTML*******************************/
// const $cards = document.querySelector(".cards"),
//   $template = document.getElementById("template-card").content,
//   $fragment = document.createDocumentFragment(),
//   cardContent = [
//     {
//       title: "luffy",
//       img: "./recursos/medias/20 (4).jpg"
//     },
//     {
//       title: "Zoro",
//       img: "./recursos/medias/20 (4).jpg"
//     },
//     {
//       title: "Sanji",
//       img: "./recursos/medias/20 (4).jpg"
//     },
//   ];

// cardContent.forEach((element) => {
//   $template.querySelector("img").setAttribute("src", element.img);
//   $template.querySelector("img").setAttribute("alt", element.title);
//   $template.querySelector("figcaption").textContent = element.title;

//   let $clone = document.importNode($template, true);
//   $fragment.appendChild($template);
// });

// $cards.appendChild($fragment);

/***************************070 - DOM_ Modificando Elementos (Old Style)*************************** */
//  const $cards = document.querySelector(".cards"),
//  $newCard = document.createElement("fragment"),
//  $cloneCards = $cards.cloneNode(true);

//  $newCard.innerHTML = `
//  <img src="./recursos/medias/20 (4).jpg" alt="ANY"></img>
//  <figcaption>Any</figcaption>
//  `;

//  $newCard.classList.add("card");

//  $cards.replaceChild($newCard, $cards.children[2]);
// $cards.insertBefore($newCard, $cards.firstElementChild);
// $cards.removeChild($cards.lastElementChild);
// document.body.appendChild($cloneCards);

/*==============================071 - DOM_ Modificando Elementos (Cool Style)==============================*/
/*.insertAdjacent...
    .insertAdjacentElement(position, el)
    .insertAdjacentHTML(position, html)
    .insertAdjacentText(position, text)

    Posiciones:
    beforebegin(hermano anterior)
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
    afterend(hermano siguiente)
*/
// const $cards = document.querySelector(".cards"),
//  $newCard = document.createElement("fragment"),
//  $img = document.createElement("img"),
//  $figcaption = document.createElement("figcaption"),
//  $figcaptionText = document.createTextNode("one piece"),

//  $img.setAttribute("src", "./recursos/medias/20 (4).jpg");
//  $img.setAttribute("alt", "luffy");

//  $figcaption.appendChild($figcaptionText);
//  $newCard.appendChild($img);

//  $newCard.appendChild($figcaption);
//  $newCard.classList.add("card");

//  $cards.appendChild($newCard);

// const $cards = document.querySelector(".cards"),
//   $newCard = document.createElement("figure");

// let $contentCard = `
//  <img src="./recursos/medias/20 (4).jpg" alt="ANY">
//  <figcaption>fairy </figcaption>
//  `;

// $newCard.classList.add("card");
// $newCard.insertAdjacentHTML("afterbegin", $contentCard);
// $newCard.querySelector("figcaption").insertAdjacentText("beforeend", " tail");
//$cards.insertAdjacentElement("afterbegin", $newCard);

// $cards.prepend($newCard); //insertar al principio
// $cards.append($newCard);
// $cards.before($newCard)
// $cards.after($newCard);

/* ============================072 - DOM_ Manejadores de Eventos======================================== */
// function hola(){
//   alert("hola mundo desde js");
//   console.log(event);
// }
// console.log(document.querySelectorAll("a").length);
// document.querySelectorAll("a").forEach((element) => console.log(element));
const $a = document.querySelectorAll("a");
$a.forEach((e) => (e.style.color = "black"));
$a.forEach((e) => (e.style.textDecoration = "none"));
const $li = document.querySelectorAll("#menu li");
$li.forEach((e) => (e.style.listStyle = "number"));
// $li.style.listStyle = "none";
// $a.style.hover.color = "blue";
const $input = document.querySelector(".input");
$input.setAttribute("placeholder", "name"); ///OJO.....

function holaMundo() {
  alert("hola mundo");
  console.log(event);
}

const $eventoSemantico = document.querySelector("#evento-semantico");
$eventoSemantico.onclick = holaMundo;
// $eventoSemantico.addEventListener('click', function(){alert("Hola Mundo")});
$eventoSemantico.onclick = function (e) {
  alert("HOla mundo Semantico");
  console.log(event);
};

const $eventoMultiple = document.querySelector("#evento-multiple");
//  $eventoMultiple.addEventListener('click',holaMundo);
//  $eventoMultiple.addEventListener('click', (e) => {
//   confirm("Esta seguro que desea eliminar este elemento");
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//  });
//  $LinkDOM.style.backgroundColor = "white";
//  $LinkDOM.style.fontSize = "20px";
//  $LinkDOM.style.setProperty("font-family", "Arial");

//  function Saludar(nombre=" desconocid@"){
//   prompt('introdusca su nombre')
//   nombre=prompt();
//   alert('hola' + ` ${nombre}`)
//  }

//  $eventoMultiple.addEventListener('dbclick', ()=>{
//   Saludar();
//   Saludar(nombre);
//  });
// $eventoMultiple.removeEventListener('click', );

// $eventoRemover.addEventListener('dbclick',(e)=>{
//   alert(`Remongo ${e.type}`);
//   console.log(e);
//   $eventoRemover.removeEventListener('dbclick');
// })

// const removerDobleClick = (e)=>{
//   alert(`Remongo ${e.type}`);
//   console.log(e);
//   $eventoRemover.removeEventListener('dbclick', removerDobleClick);
// }
// $eventoRemover.removeEventListener('dbclick', removerDobleClick);
/*
======================074 - DOM_ Flujo de Eventos (Burbuja y Captura)=====================================
*/
const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
$linkEventos = document.querySelector(".eventos-flujo a");

// console.log($divsEventos);

function flujoEventos(e) {
  console.log(
    `hola te saluda ${this.className}, el evento lo origino ${e.target.className}`
  );
  e.stopPropagation();
}

document.addEventListener('click', (e) =>{
  console.log('click en ', e.target);

if(e.target.matches(".eventos-flujo div")){
  flujoEventos(e);
}

  if(e.target.matches(".eventos-flujo a")){
    alert('hellow');
    e.preventDefault();
  }
});



// $divsEventos.forEach((div) => {
//   //fase de burbuja
//   div.addEventListener("click", flujoEventos, false);
//   //fase de captura
//   // div.addEventListener("click", flujoEventos, {
//   //   capture: true,
//   //   once: true,
//   // });
// });

// $linkEventos.addEventListener('click', (e)=>{
//   alert('hola, Dtbm');
//   e.preventDefault();
//   e.stopPropagation();
// });
