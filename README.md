# Descrição do Projeto: Sistema de Reserva de Espaços

## Visão Geral

Este projeto é um sistema de reserva de espaços, desenvolvido com as tecnologias HTML, CSS e JavaScript. Ele permite que os usuários façam, editem, excluam e visualizem reservas de diferentes espaços disponíveis em uma instituição. O sistema organiza e exibe as reservas feitas, bem como as turmas e horários correspondentes.

## Funcionalidades

### 1. Fazer Reserva
Os usuários podem selecionar uma turma, um espaço e um horário específicos para fazer uma reserva. O sistema verifica se o espaço e horário já estão ocupados antes de confirmar a reserva.

### 2. Editar Reserva
Reservas existentes podem ser editadas. Ao clicar no botão "Editar" ao lado de uma reserva, os detalhes da reserva são carregados no formulário, permitindo as modificações necessárias.

### 3. Excluir Reserva
Reservas podem ser excluídas individualmente. O sistema solicita confirmação antes de excluir qualquer reserva para evitar remoções acidentais.

### 4. Zerar Todas as Reservas
Esta funcionalidade permite que todas as reservas sejam removidas de uma vez, útil para reiniciar o sistema de reservas, por exemplo, no início de um novo período.

### 5. Exibir Reservas
As reservas são exibidas em uma lista organizada, mostrando a turma, o espaço e o horário de cada reserva.

### 6. Exibir Turmas Reservadas
As turmas e suas respectivas reservas são exibidas em colunas, facilitando a visualização e organização das informações.

### 7. Impressão das Reservas
Os usuários podem imprimir uma lista das reservas feitas. Antes da impressão, é possível inserir uma data que será exibida ao lado do título "Turmas Reservadas". As reservas são formatadas em duas colunas para uma melhor utilização do espaço na impressão.

## Estrutura do Projeto

### HTML
O arquivo HTML contém a estrutura básica do sistema, incluindo o formulário de reservas e os contêineres para exibir as reservas e turmas.

### CSS
O arquivo CSS define o estilo do sistema, utilizando a fonte Montserrat e estilos específicos para botões, listas e tabelas, garantindo uma interface amigável e visualmente agradável.

### JavaScript
O arquivo JavaScript contém a lógica do sistema, incluindo as funções para fazer, editar, excluir e exibir reservas, além da funcionalidade de impressão.

## Como Utilizar

1. **Preenchimento do Formulário**: Selecione a turma, espaço e horário desejados e clique em "Reservar".
2. **Edição de Reserva**: Clique em "Editar" ao lado da reserva que deseja modificar. Faça as alterações no formulário e clique em "Atualizar".
3. **Exclusão de Reserva**: Clique em "Excluir" ao lado da reserva que deseja remover e confirme a exclusão.
4. **Zerar Reservas**: Clique em "Zerar Todas as Reservas" para remover todas as reservas de uma vez.
5. **Impressão**: Clique em "Imprimir Reservas", insira a data desejada e confirme para visualizar a página de impressão formatada.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Melhorias Futuras

- Implementação de autenticação de usuários.
- Integração com um banco de dados para armazenamento persistente das reservas.
- Adição de filtros e pesquisa para facilitar a localização de reservas específicas.
- Responsividade completa para uso em dispositivos móveis.

Este projeto foi desenvolvido para proporcionar uma solução prática e eficiente para a gestão de reservas de espaços, facilitando a organização e visualização das informações de forma clara e intuitiva.
