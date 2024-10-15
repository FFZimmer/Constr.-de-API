# API de Produtos

## Descrição
Esta API permite a criação, leitura, atualização e exclusão (CRUD) de produtos. A persistência dos dados é feita em um arquivo JSON, e os dados são validados utilizando a biblioteca Joi.

## Instalação
Para rodar a API, siga os passos abaixo:

```bash
git clone <repositório>
cd <nome_do_projeto>
npm install
npm start
 
Endpoints
GET /products
Retorna todos os produtos.
[
  {
    "title": "Teste",
    "price": 1
  }
]

POST /products
Cria um novo produto.

Parâmetros:
title: string (obrigatório, mínimo de 3 caracteres)
price: número (obrigatório, deve ser um número positivo)

Exemplo de requisição:
curl -X POST http://localhost:3000/products \
  -H 'Content-Type: application/json' \
  -d '{"title": "Teste", "price": 1}'

Exemplo de resposta de erro (validação falhou):
{
  "error": "\"title\" length must be at least 3 characters long"
}

Validações
O campo title deve ter no mínimo 3 caracteres.
O campo price deve ser um número positivo.
Persistência de Dados
Os dados dos produtos são salvos no arquivo products.json, garantindo que eles não sejam perdidos ao reiniciar o servidor.

Com isso, o projeto já está configurado para trabalhar com **products**, validando os dados com **Joi** e persistindo-os em um arquivo JSON.
