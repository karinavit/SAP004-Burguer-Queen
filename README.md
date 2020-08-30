# Burguer-Queen


- [1. Introdução](#1-introdução)
- [2. Acesse nossa Aplicação Finalizada](#2-Acesse-nossa-aplicação-finalizada)
- [3. Definição de Produto e Histórias de Usuários](#3-definição-de-produto-e-histórias-de-usuários)
- [4. Implementações Futuras Checklist](#4-implementações-futuras-checklist)
- [5. Instalação do projeto](#5-instalação-do-projeto)


## 1. Introdução
Este projeto foi desenvolvido por [Adriana Fernando](https://github.com/AdrianaFernando) 
e [Karina Vitangelo](https://github.com/karinavit) alunas da 4a Geração da [Laboratoria](https://github.com/Laboratoria) (SAP004).
A proposta é criar uma aplicação que auxilie um restaurante em fase de crescimento de modo a agilizar as anotações de pedidos, gestão de preparo e entrega dos mesmos. 
A aplicação foi desenvolvida utilizando [React](https://pt-br.reactjs.org/), [JavaScript, HTML5 e CSS3](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript). Hospedamos a mesma juntamente com seu de dados no [Firebase](https://firebase.google.com/?hl=pt). Com foco na usabilidade em tablets e web. 

### Planejamento
Com base na Metodologia Ágil, foi criado um quadro no Trello, onde definimos tarefas de acordo com cada história de usuário, veja mais sobre na parte [3. Definição de Produto e Histórias de Usuários](#3-definição-de-produto-e-histórias-de-usuários), e assim conseguíamos acompanhar, revisar e ajustar conforme necessário. 

### Nosso Quadro
![oie_m7GGAtPlkDba](https://user-images.githubusercontent.com/61189470/91666276-d6247780-ead1-11ea-8b16-b30cb09c7156.png)

## 2. Acesse nossa Aplicação Finalizada
Acesse nossa aplicação neste [link](https://mandalanchos-3e943.web.app/)

![BurguerQueen](https://user-images.githubusercontent.com/61189470/90974047-fcf51380-e4fd-11ea-9fc6-4a5e2e72f79e.png)


**Logins de Teste:**

Perfil Cozinha: 

e-mail: cozinha@cozinha.com  
senha: 123456

Perfil Salão:

e-mail: salao@salao.com

senha: 123456

## 3. Definição de Produto e Histórias de Usuários

### Definição do produto

O [_Product Owner_](https://www.youtube.com/watch?v=7lhnYbmovb4) nos apresentou este _backlog_ que é o resultado do seu trabalho com o cliente até hoje.

---

#### [História de usuário 1] Usuário deve ter seu perfil (login/senha) para acessar o sistema.

Eu como funcionário do restaurante quero entrar na plataforma e ver apenas a tela importante para o meu trabalho.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

- [x] Poder realizar cadastro com e-mail, senha e função.
- [x] Poder realizar login com e-mail e senha.
- [x] Redirecionar para a tela correta.

#### [História de usuário 2] Garçom/Garçonete deve poder anotar o seu pedido

Eu como garçom/garçonete quero poder anotar o meu pedido saber o valor de cada produto e poder enviar o pedido para a cozinha para ser preparado.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

- [x] Digitar o nome do cliente e mesa.
- [x] Filtrar _menu_ para _café da manhã_ e _almoço/jantar_.
- [x] Adicionar item ao pedido.
- [x] Excluir item do pedido.
- [x] Mostrar _resumo_ do pedido com todos os itens e o total.
- [x] Enviar para a cozinha (isso deve salvar o pedido).
---

#### [História de usuário 3] Chefe de cozinha deve ver os pedidos

Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser entregue ao cliente.

##### Critérios de aceitação

- [x] Visualizar pedidos pendentes para produção.
- [x] Marcar pedido como pronto para entrega.
- [x] Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.


#### [História de usuário 4] Garçom/Garçonete deve ver os pedidos prontos para servir

Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes.

##### Critérios de aceitação

- Ver a lista de pedidos prontos para servir.
- Marque os pedidos que foram entregues.

##### Definição de pronto
- Você deu deploy de seu aplicativo.
- Os dados devem ser mantidos intactos, mesmo depois que um pedido terminado. Tudo isso para poder ter estatísticas no futuro.

### UX

- [x] Funciona bem em tablets.
- [x] Fácil utilização em telas sensíveis ao toque.
---

## 4. Implementações Futuras Checklist
Pensando em melhorias para o nossa aplicação, abaixo listamos as atividades para implementação futura:

- [ ] Documentação do processo de design.
- [ ] HU1: Aperfeiçoamento das rotas privadas e internas
- [ ] HU3: Ver histórico dos pedidos.
- [ ] HU4: Visualizar pedidos pendentes para entrega.
- [ ] HU4: Marcar pedido como entregue ao cliente.
- [ ] UX: Status atual do pedido sempre visível enquanto fazemos um pedido.
- Fazer testes que cubram 100% de statements, functions, lines e branches.
- [ ] 100% de cobertura de _statements_.
- [ ] 100% de cobertura de _functions_.
- [ ] 100% de cobertura de _lines_.
- [ ] 100% de cobertura de _branches_.

## 5. Instalação do projeto

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



