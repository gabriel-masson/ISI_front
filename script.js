/*
const items = loadItems();
let id = 0
const table = document.querySelector("#table-info");
const nome = document.querySelector("#name")
const idade = document.querySelector("#idade")
const especialidade = document.querySelector("#especialidade")
const criar = document.querySelector("#criar")
const editar = document.querySelector("#teste")

const form = document.getElementById('create-form');
const tableBody = document.getElementById("table-body")

function renderItems() {
    alert(oi)
    console.log(items)
    itemList.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          ${items.map((item, index) => `
            <tr>
              <td>${nome.value}</td>
              <td>${nome.value}</td>
              <td>
                <button data-index="${nome.value}">Excluir</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    
    // Adiciona o evento de clique para os botões de exclusão
    const deleteButtons = itemList.querySelectorAll('button');
    deleteButtons.forEach(button => {
      button.addEventListener('click', () => {
        const index = button.getAttribute('data-index');
        items.splice(index, 1);
        saveItems(items);
        renderItems(items);
      });
    });
  }
// Adiciona um novo item
form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(especialidade.value)
    console.log(idade.value)
    console.log(nome.value)
    id++
    const newItem = {
        id,
        nome: nome.value,
        idade: idade.value,
        especialidade: especialidade.value

    };
    items.push(newItem);
    saveItems(items);
    console.log(items)
    form.reset();
});
// Função para salvar os itens na Local Storage
function saveItems(items) {
    localStorage.setItem('items', JSON.stringify(items));
}

// Função para carregar os itens da Local Storage
function loadItems() {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
        return items;
    } else {
        return [];
    }
}

function oi() {
    let url = String(window.location.href);
    let id = url.split("=")[1]
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            console.log(data[i])
        }
    }
    console.log(data)
}

*/