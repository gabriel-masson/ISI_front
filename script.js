const form = document.getElementById('create-form');
const itemList = document.getElementById('item-list');

// Função para salvar os itens na Local Storage
function saveItems(items) {
  localStorage.setItem('items', JSON.stringify(items));
}

// Função para carregar os itens da Local Storage
// não funciona
async function loadItems() {
  let itens = await fetch("http://localhost:3000/api/aluno", {
    method: "GET",
    mode: "no-cors",
  });
  console.log(itens)
  if (itens) {
    return itens;
  } else {
    return [];
  }
}

// Função para exibir os itens na tela
async function renderItems() {
  itemList.innerHTML = '';
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.nome} - ${item.idade} anos - </strong>titulo de ${item.titulo} com linha de pesquisa em ${item.linha_de_pesquisa}`;
    const deleteButton = document.createElement('button');
    deleteButton.className = "btn-remove"
    deleteButton.innerText = 'Excluir';
    deleteButton.addEventListener('click', () => {
      items.splice(i, 1);
      saveItems(items);
      renderItems(items);
    });
    li.appendChild(deleteButton);
    itemList.appendChild(li);
  }
}

// Carrega os itens da Local Storage ao carregar a página
const items = loadItems();
renderItems(items);

// Adiciona um novo item
//funciona direitinho
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const nome = document.querySelector('#nome').value;
  console.log(nome)
  const linha_de_pesquisa = document.querySelector('#linha_de_pesquisa').value;
  const idade = document.querySelector('#idade').value;
  const titulo = document.querySelector('#titulo').value;


  let i = await fetch(`http://localhost:3000/api/aluno?nome=${nome}&linha_de_pesquisa=${linha_de_pesquisa}&idade=${idade}&titulo=${titulo}`, {
    method: "POST",
    mode: "no-cors",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

    //make sure to serialize your JSON body
    body: JSON.stringify({ })
  })

  
 
  await renderItems();
  form.reset();
});
