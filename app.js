"use strict";
// Lista que armazenará os dados em memória
let credentials = [];
// Mapeamento dos elementos HTML
const btnAdd = document.getElementById('btn-add');
const btnCancel = document.getElementById('btn-cancel');
const btnSave = document.getElementById('btn-save');
const modal = document.getElementById('modal');
const passwordList = document.getElementById('password-list');
const inputService = document.getElementById('input-service');
const inputUser = document.getElementById('input-user');
const inputPass = document.getElementById('input-pass');
// Função para atualizar a tela com os cartões
function renderList() {
    passwordList.innerHTML = '';
    credentials.forEach(cred => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${cred.service}</h3>
            <p><strong>Usuário:</strong> ${cred.user}</p>
            <p><strong>Senha:</strong> ${cred.pass}</p>
        `;
        passwordList.appendChild(card);
    });
}
// Abre o formulário
btnAdd.addEventListener('click', () => {
    modal.classList.remove('hidden');
});
// Fecha o formulário
btnCancel.addEventListener('click', () => {
    modal.classList.add('hidden');
    clearInputs();
});
// Salva um novo login
btnSave.addEventListener('click', () => {
    if (inputService.value && inputUser.value && inputPass.value) {
        const newCredential = {
            id: Date.now(),
            service: inputService.value,
            user: inputUser.value,
            pass: inputPass.value
        };
        credentials.push(newCredential);
        renderList();
        modal.classList.add('hidden');
        clearInputs();
    }
    else {
        alert("Preencha todos os campos!");
    }
});
// Limpa os campos após salvar ou cancelar
function clearInputs() {
    inputService.value = '';
    inputUser.value = '';
    inputPass.value = '';
}
