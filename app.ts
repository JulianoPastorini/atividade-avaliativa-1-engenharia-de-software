// Define o tipo de dado para um login
interface LoginCredential {
    id: number;
    service: string;
    user: string;
    pass: string;
}

// Lista que armazenará os dados em memória
let credentials: LoginCredential[] = [];

// Mapeamento dos elementos HTML
const btnAdd = document.getElementById('btn-add') as HTMLButtonElement;
const btnCancel = document.getElementById('btn-cancel') as HTMLButtonElement;
const btnSave = document.getElementById('btn-save') as HTMLButtonElement;
const modal = document.getElementById('modal') as HTMLDivElement;
const passwordList = document.getElementById('password-list') as HTMLDivElement;

const inputService = document.getElementById('input-service') as HTMLInputElement;
const inputUser = document.getElementById('input-user') as HTMLInputElement;
const inputPass = document.getElementById('input-pass') as HTMLInputElement;

// Função para atualizar a tela com os cartões
function renderList(): void {
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
        const newCredential: LoginCredential = {
            id: Date.now(),
            service: inputService.value,
            user: inputUser.value,
            pass: inputPass.value
        };

        credentials.push(newCredential);
        renderList();
        
        modal.classList.add('hidden');
        clearInputs();
    } else {
        alert("Preencha todos os campos!");
    }
});

// Limpa os campos após salvar ou cancelar
function clearInputs(): void {
    inputService.value = '';
    inputUser.value = '';
    inputPass.value = '';
}