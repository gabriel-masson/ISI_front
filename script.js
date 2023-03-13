const form = document.getElementById('create-form');
const itemList = document.getElementById('item-list');
const body = document.body;

// Função para carregar os itens da Local Storage
// não funciona
async function loadItems() {
  let itensPromisse = await fetch("http://localhost:3000/api/aluno", {
    method: "GET",
    mode: "cors",
  });
  let itens = await itensPromisse.json()

  if (itens) {
    return itens;
  } else {
    return [];
  }
}

// Função para exibir os itens na tela
async function renderItems(items) {
  itemList.innerHTML = '';
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.nome} - ${item.titulo} anos - </strong>titulo de ${item.idade}  com linha de pesquisa em ${item.linha_de_pesquisa}`;
    const deleteButton = document.createElement('button');
    deleteButton.className = "btn-remove"
    deleteButton.innerText = 'Excluir';
    deleteButton.addEventListener('click', async () => {
      console.log(item.nome)
      await fetch(`http://localhost:3000/api/aluno/${item.nome}`, {
        method: "DELETE",
        mode: "cors",
      })
    
      renderItems(items);
      window.location.reload(true);
    });
    li.appendChild(deleteButton);
    itemList.appendChild(li);
  }
}
let itens;
// Carrega os itens da Local Storage ao carregar a página
body.onload = (async () => {
  itens = await loadItems();
  console.log(itens)
  renderItems(itens);
})

// Adiciona um novo item
//funciona direitinho
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const nome = document.querySelector('#nome').value;
  console.log(nome)
  const linha_de_pesquisa = document.querySelector('#linha_de_pesquisa').value;
  const idade = document.querySelector('#idade').value;
  const titulo = document.querySelector('#titulo').value;


  let i = await fetch(`http://localhost:3000/api/aluno`, {
    method: "POST",
    mode: "cors",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

    //make sure to serialize your JSON body
    body: JSON.stringify({ titulo, idade, nome, linha_de_pesquisa })
  })



  await renderItems(itens);
  form.reset();
  window.location.reload(true);
});
