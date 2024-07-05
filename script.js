// Array para armazenar as reservas (exemplo)
let reservas = [];

// Função para fazer a reserva
function fazerReserva() {
    const turma = document.getElementById('turma').value;
    const espaço = document.getElementById('espaço').value;
    const horario = document.getElementById('horario').value;

    if (!turma || !espaço || !horario) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verifica se já existe reserva para o espaço e horário selecionados
    const reservaExistente = reservas.find(reserva =>
        reserva.espaço === espaço && reserva.horario === horario
    );

    if (reservaExistente) {
        alert(`O espaço "${espaço}" no horário "${horario}" já está ocupado.`);
        return;
    }

    const reserva = {
        turma: turma,
        espaço: espaço,
        horario: horario
    };

    reservas.push(reserva);
    exibirReservas();
    exibirTurmas();
}

// Função para exibir as reservas na lista
function exibirReservas() {
    const listaReservas = document.getElementById('listaReservas');
    listaReservas.innerHTML = '';
    reservas.forEach((reserva, index) => {
        const li = document.createElement('li');
        li.textContent = `Turma: ${reserva.turma}, Espaço: ${reserva.espaço}, Horário: ${reserva.horario}`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.className = 'edit-btn';
        editButton.onclick = () => editarReserva(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = () => confirmarExcluirReserva(index);

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        listaReservas.appendChild(li);
    });
}

// Função para exibir as turmas separadamente
function exibirTurmas() {
    const turmasReservas = document.getElementById('turmasReservas');
    turmasReservas.innerHTML = '';

    // Organizar reservas por turma
    const turmas = {};
    reservas.forEach(reserva => {
        if (!turmas[reserva.turma]) {
            turmas[reserva.turma] = [];
        }
        turmas[reserva.turma].push(reserva);
    });

    // Exibir cada turma separadamente
    Object.keys(turmas).forEach(turma => {
        const turmaDiv = document.createElement('div');
        turmaDiv.innerHTML = `<h3>${turma}</h3>`;
        const ul = document.createElement('ul');
        turmas[turma].forEach(reserva => {
            const li = document.createElement('li');
            li.textContent = `Espaço: ${reserva.espaço}, Horário: ${reserva.horario}`;
            ul.appendChild(li);
        });
        turmaDiv.appendChild(ul);
        turmasReservas.appendChild(turmaDiv);
    });
}

// Função para editar uma reserva
function editarReserva(index) {
    const reserva = reservas[index];
    document.getElementById('turma').value = reserva.turma;
    document.getElementById('espaço').value = reserva.espaço;
    document.getElementById('horario').value = reserva.horario;

    document.getElementById('btnAtualizar').style.display = 'inline';
    document.getElementById('btnAtualizar').onclick = () => {
        reservas[index].turma = document.getElementById('turma').value;
        reservas[index].espaço = document.getElementById('espaço').value;
        reservas[index].horario = document.getElementById('horario').value;
        exibirReservas();
        exibirTurmas();
        limparFormulario();
        document.getElementById('btnAtualizar').style.display = 'none';
    };
}

// Função para confirmar a exclusão de uma reserva
function confirmarExcluirReserva(index) {
    if (confirm('Tem certeza que deseja excluir esta reserva?')) {
        excluirReserva(index);
        exibirTurmas();
    }
}

// Função para excluir uma reserva
function excluirReserva(index) {
    reservas.splice(index, 1);
    exibirReservas();
}

// Função para limpar o formulário após uma ação
function limparFormulario() {
    document.getElementById('turma').value = '';
    document.getElementById('espaço').value = '';
    document.getElementById('horario').value = '';
}

// Função para zerar todas as reservas
function zerarReservas() {
    if (confirm('Tem certeza que deseja zerar todas as reservas?')) {
        reservas = [];
        exibirReservas();
        exibirTurmas();
    }
}


// Função para imprimir as reservas feitas (exemplo)
function imprimirReservas() {
    const data = document.getElementById('data').value;
    const turmasReservas = document.getElementById('turmasReservas');
    const janelaImpressao = window.open('', 'Impressão', 'height=600,width=800');

    const dataFormatada = data ? new Date(data).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) : '';

    janelaImpressao.document.write(`
        <html>
        <head>
            <title>Impressão de Turmas Reservadas</title>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
            <style>
                body {
                    font-family: 'Montserrat', sans-serif;
                    margin: 10px;
                    font-size: 10px;
                }

                h1 {
                    margin-bottom: 10px;
                }

                .data-impressao {
                    margin-left: 10px;
                    font-size: 14px;
                    color: #555;
                }

                .coluna {
                    width: 48%;
                    float: left;
                    margin-right: 2%;
                }

                .coluna:last-child {
                    margin-right: 0;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 10px;
                }

                th, td {
                    border: 1px solid #ccc;
                    padding: 5px;
                    text-align: left;
                }

                th {
                    background-color: #f2f2f2;
                }

                .clearfix::after {
                    content: "";
                    clear: both;
                    display: table;
                }
            </style>
        </head>
        <body>
            <h1>Turmas Reservadas<span class="data-impressao">${dataFormatada ? ` - ${dataFormatada}` : ''}</span></h1>
            <div class="clearfix">
                ${gerarTabelasTurmas()}
            </div>
            <script>window.print();</script>
        </body>
        </html>
    `);

    janelaImpressao.document.close();
}

// Função auxiliar para gerar tabelas das turmas reservadas
function gerarTabelasTurmas() {
    const turmas = {};
    reservas.forEach(reserva => {
        if (!turmas[reserva.turma]) {
            turmas[reserva.turma] = [];
        }
        turmas[reserva.turma].push(reserva);
    });

    const turmaKeys = Object.keys(turmas);
    const half = Math.ceil(turmaKeys.length / 2);

    const coluna1 = turmaKeys.slice(0, half);
    const coluna2 = turmaKeys.slice(half);

    const gerarColuna = (coluna) => coluna.map(turma => `
        <h3>${turma}</h3>
        <table>
            <thead>
                <tr>
                    <th>Espaço</th>
                    <th>Horário</th>
                </tr>
            </thead>
            <tbody>
                ${turmas[turma].map(reserva => `
                    <tr>
                        <td>${reserva.espaço}</td>
                        <td>${reserva.horario}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `).join('');

    return `
        <div class="coluna">
            ${gerarColuna(coluna1)}
        </div>
        <div class="coluna">
            ${gerarColuna(coluna2)}
        </div>
    `;
}


