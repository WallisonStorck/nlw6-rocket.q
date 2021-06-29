import Modal from './modal.js'; //Importa a função

const modal = Modal(); //Guarda a função na constante.

//Mapeando para usar modal para confirmar leitura também
const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

const checkButton = document.querySelectorAll('.actions a.check');
checkButton.forEach(element => {
   element.addEventListener('click', handleClick);
});

//Quando o botão delete for clicado abre a modal para então confirmar 
const deleteButton = document.querySelectorAll('.actions a.delete');
deleteButton.forEach(element => {
   element.addEventListener('click', (event) => handleClick(event, false));
});

function handleClick(event, check = true) {
   event.preventDefault(); //Bloqueia o formulário para nao mudar de página.
   const text = check ? "Deseja marcar como lida" : "Tem certeza que você deseja excluir";
   const slug = check ? "check" : "delete";
   const roomId = document.querySelector('#room-id').dataset.id;
   const questionId = event.target.dataset.id;

   const form = document.querySelector('.modal form');
   form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);


   modalTitle.innerHTML = check ? "Marcar pergunta como lida" : "Excluir pergunta";
   modalDescription.innerHTML = check ? `${text} esta pergunta?` : `${text} esta pergunta?`;
   modalButton.textContent = check ? "Sim, marcar" : "Sim, excluir";
   check ? modalButton.classList.remove('red') : modalButton.classList.add('red');

   modal.open();
}

