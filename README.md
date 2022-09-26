# Exercício de Admissão Scale - 01

Exercicio para avaliação do time Scale

# Scale-01-Back

## Objetivo 

1) Construir e consumir uma API que fornece dados de usuários semelhante à URL https://reqres.in/api/users. A exibição deve conter a foto, nome, sobrenome e e-mail. A lista deve ser paginada. O exemplo da URL mostra os parâmetros de paginação e como podem ser usados por ela para permitir a paginação.
Devem ser entregues em dois repositórios diferentes (frontend e backend), um para o programa que consome a API e outro para a API em si.

## Descrição

Neste projeto foi criado uma API com 12 personagens da série Game of Thrones, esses personagens possuem 5 dados: id, foto, nome, sobrenome e e-mail. <br>
As consultas dos dados podem ser feitas pelas requisições "/api/users" que mostrara a 1 pagina da APi com 6 elementos, utilizando "/api/users/{id}" busca o elemento com o id digitado, para selecionar a pagina 2 utilize na URL "/api/users?page=2"

Lembrando que a API estara sendo executada no http://localhost:

## Como usar 

No terminal executar os comandos: 

npm i - para instalar o node_modules <br>
npm start - iniciar a api
