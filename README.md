- [1. Introdução](#1-introdução)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Definição de Produto e Histórias de Usuários](#3-definição-de-produto-e-histórias-de-usuários)
- [4. Instalação do projeto](#4-instalação-do-projeto)
- [5. Checklist](#5-Checklist)
- [6. Implementações Futuras - Checklist](#6-implementações-futuras-checklist)
- [7. Dicas e leituras complementares](#7-dicas-e-leituras-complementares)


## 1. Introdução
Este projeto foi desenvolvido por [Adriana Fernando](https://github.com/AdrianaFernando) 
e [Karina Vitangelo](https://github.com/karinavit) alunas da 4a Geração da [Laboratoria](https://github.com/Laboratoria) (SAP004).
O objetivo é criar uma aplicação utilziando um framework (escolhemos o [React](https://pt-br.reactjs.org/))
Abaixo está a proposta e demais informações detalhadas. 

## 2. Resumo do projeto
Um pequeno restaurante de hambúrgueres, que está crescendo, necessita uma interface em que se possa realizar pedidos utilizando um _tablet_, e enviá-los para a cozinha para que sejam preparados de forma ordenada e eficiente.

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Estas são as informações que temos do cliente:

> Somos **Burger Queen**, um fast food 24hrs.
>
> A nossa proposta de serviço 24 horas foi muito bem recebida e, para continuar a
> crescer, precisamos de um sistema que nos ajude a receber pedidos de nossos
> clientes.
>
> Nós temos 2 menus. Um muito simples para o café da manhã:
>
> | Ítem                  | Preço R\$ |
> | --------------------- | --------- |
> | Café americano        | 5         |
> | Café com leite        | 7         |
> | Misto Quente          | 10        |
> | Suco de fruta natural | 7         |
>
> E outro menu para o resto do dia:
>
> | Ítem                | Preço   |
> | ------------------- | ------- |
> | **Hambúrgueres**    | **R\$** |
> | Hambúrguer simples  | 10      |
> | Hambúrguer duplo    | 15      |
> | **Acompanhamentos** | **R\$** |
> | Batata frita        | 5       |
> | Anéis de cebola     | 5       |
> | **Bebidas**         | **R\$** |
> | Água 500ml          | 5       |
> | Água 750ml          | 7       |
> | Refrigerante 500ml  | 7       |
> | Refrigerante 750ml  | 10      |
>
> **Importante:** Os clientes podem escolher entre hambúrgueres de carne bovina,
> frango ou vegetariano. Além disso, por um adicional de R\$ 1,00 , eles podem
> adicionar queijo ou ovo.
>
> Nossos clientes são bastante indecisos, por isso é muito comum que eles mudem o
> seu pedido várias vezes antes de finalizar.

A interface deve mostrar os dois menus (café da manhã e restante do dia), cada
um com todos os seus _produtos_. O usuário deve poder escolher que _produtos_
adicionar e a interface deve mostrar o _resumo do pedido_ com o custo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)


## 3. Definição de Produto e Histórias de Usuários

### Definição do produto

O [_Product Owner_](https://www.youtube.com/watch?v=7lhnYbmovb4) nos apresentou este _backlog_ que é o resultado do seu trabalho com o cliente até hoje.

---

#### [História de usuário 1] Usuário deve ter seu perfil (login/senha) para acessar o sistema.

Eu como funcionário do restaurante quero entrar na plataforma e ver apenas a tela importante para o meu trabalho.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

- Criar login e senha.
- Registar tipo de usuário (cozinha / salão), login e senha.
- Entrar na tela correta para cada usuário.

##### Definição de pronto

O acordado abaixo deve acontecer para dizer que a história está terminada:

- Você fez testes de usabilidade e incorporou o feedback do usuário.
- Você deu deploy de seu aplicativo.

#### [História de usuário 2] Garçom/Garçonete deve poder anotar o seu pedido

Eu como garçom/garçonete quero poder anotar o meu pedido saber o valor de cada produto e poder enviar o pedido para a cozinha para ser preparado.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

- Anotar o nome e mesa.
- Adicionar produtos aos pedidos.
- Excluir produtos.
- Ver resumo e o total da compra.
- Enviar o pedido para a cozinha (guardar em algum banco de dados).
- Funcionar bem e se adequar a um _tablet_.

##### Definição de pronto

O acordado abaixo deve acontecer para dizer que a história está terminada:

- Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
- Você deu deploy de seu aplicativo.

---

#### [História de usuário 3] Chefe de cozinha deve ver os pedidos

Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser entregue ao cliente.

##### Critérios de aceitação

- Ver os pedidos à medida em que são feitos.
- Marcar os pedidos que foram preparados e estão prontos para serem servidos.
- Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.

##### Definição de pronto

- Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
- Você deu deploy de seu aplicativo.

---

#### [História de usuário 4] Garçom/Garçonete deve ver os pedidos prontos para servir

Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes.

##### Critérios de aceitação

- Ver a lista de pedidos prontos para servir.
- Marque os pedidos que foram entregues.

##### Definição de pronto

- Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
- Você deu deploy de seu aplicativo.
- Os dados devem ser mantidos intactos, mesmo depois que um pedido terminado. Tudo isso para poder ter estatísticas no futuro.

---

## 4. Instalação do projeto

Caso deseje baixar o projeto para sua máquina é possível criar um fork do nosso repositório e depois disso, você deve realizar um "clone" ou "donwload" do **link fornecido pelo seu repositório** para então digitar em seu terminal:

  `git clone <cole seu link após isso>`
  
O repositório será completamente baixado em sua máquina, e caso use o Visual Studio Code, basta entrar na pasta pelo terminal e digitar:

  `code .`

Caso não possua o Node.js instalado, basta clicar nesse link [aqui](https://nodejs.org/pt-br/download/) e fazer o download, pois, para executar ele em seu computador, será necessário realizar a instalação da pasta node modules, com o uso do NPM (nativo do Node.js).

Assim que a instalação tiver sido concluída, basta digitar em seu terminal:

`npm install` 

E aguardar até que o processo tenha sido completo.

É importante ressaltar que também utilizamos o [React](https://pt-br.reactjs.org/) e o [React-Router-Dom](https://reactrouter.com/web/guides/quick-start). 

### Antes de instalar o Firebase, certifique-se de criar uma conta e abrir um projeto novo ( visto que você não terá acesso ao nosso banco de dados):

Lembre-se de instalar o Firebase, utilizando o comando (este comando irá instalar o Firebase globalmente em sua máquina):

`npm install -g firebase-tools`

Faça login no Google. Execute este comando: (Esse comando conecta sua máquina local ao Firebase e concede acesso aos seus projetos.)

`firebase login`

Inicialize seu projeto utilizando o comando:

  `firebase init`

Para abrir um servidor a fim de executar o projeto em seu navegador, é só digitar:
  
  `firebase serve`

Basta clicar no link (localhost) que será disponibilizado em seu terminal. 

Após manipular o projeto e então realizar um deploy, utilize o seguinte comando:

`firebase deploy`


## 5. Checklist

### `README.md`
- [x] Inclui informações para desenvolvedores (dependências, instalação, uso, testes...)

#### HU

#### HU 1: Criar perfil

- [x] Poder realizar cadastro com e-mail, senha e função.
- [x] Poder realizar login com e-mail e senha.
- [x] Redirecionar para a tela correta.

#### HU 2: Anotar pedidos

- [x] Digitar o nome do cliente e mesa.
- [x] Filtrar _menu_ para _café da manhã_ e _almoço/jantar_.
- [x] Adicionar item ao pedido.
- [x] Excluir item do pedido.
- [x] Mostrar _resumo_ do pedido com todos os itens e o total.
- [x] Enviar para a cozinha (isso deve salvar o pedido).

#### HU 3: Ver pedidos na cozinha

- [x] Visualizar pedidos pendentes para produção.
- [ ] Marcar pedido como pronto para entrega.

### UX

- [x] Funciona bem em tablets.
- [x] Fácil utilização em telas sensíveis ao toque.

## 6. Implementações Futuras - Checklist
Abaixo listamos as atividades para implementação futura:

- [ ] Documentação do processo de design.
- [ ] HU1: Aperfeiçoamento das rotas privadas e internas
- [ ] HU3: Ver histórico dos pedidos.
- [ ] HU4: Visualizar pedidos pendentes para entrega.
- [ ] HU4: Marcar pedido como entregue ao cliente.
- [ ] UX: Status atual do pedido sempre visível enquanto fazemos um pedido.

## Hacker Edition

As seções chamadas Hacker Edition são opcionais. Se você terminou tudo e ainda sobrou tempo, faça essa parte. Assim você poderá aprofundar e exercitar mais sobre os objetivos de aprendizagem do projeto.

- Faça testes que cubram 100% de statements, functions, lines e branches.
- [ ] 100% de cobertura de _statements_.
- [ ] 100% de cobertura de _functions_.
- [ ] 100% de cobertura de _lines_.
- [ ] 100% de cobertura de _branches_.
