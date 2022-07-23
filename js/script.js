const palavras = document.querySelectorAll("[draggable='true']");
const containerSoltar = document.querySelector(".container-soltar");
console.log(containerSoltar)

function comecarArrastar(){
  this.classList.add('arrastando')
  console.log('Começou a arrastar');
}

function entrouSoltar(){
  this.classList.add("hover")
  const elementoArrastado = document.querySelector('.arrastando');

  this.appendChild(elementoArrastado)
}

function sairRegiaoSoltavel(){
  this.classList.remove('hover');
}

// o evento dragstart cuida quando começamos a arrastar o objeto
palavras.forEach( (palavra) => {
    palavra.addEventListener("dragstart", comecarArrastar)
});


// Evento para os elementos que soltamos os elementos arrastaveis
// O evento dragover corresponde a regiao que soltamos o elementos, quando encostarmos nela, ele dipara
containerSoltar.addEventListener('dragover', entrouSoltar);
containerSoltar.addEventListener('dragleave', sairRegiaoSoltavel)


// Basicamente adicionamos uma classe ao elemento que tocar no lugar onde queremos deixa-lo
// Logo, basta adicionar um evento no local e adicionar o elemento arrastado pegando-o pela classe adicionada quando ele tocou.

