# Payment Processing Application

## Descrição

Esta é uma aplicação de processamento de pagamentos que permite iniciar pagamentos e consultar o status dos pagamentos. A aplicação utiliza Node.js, Express, Mongoose, e integra-se com um serviço de pagamento externo.

## Funcionalidades

- **Iniciar Pagamento**: Permite iniciar um pagamento com detalhes como valor, moeda, método de pagamento e ID do produto.
- **Consultar Status do Pagamento**: Permite consultar o status de um pagamento específico.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento.
- **Express**: Framework web para Node.js.
- **Mongoose**: Biblioteca de modelagem de dados para MongoDB e Node.js.
- **Axios**: Cliente HTTP para fazer requisições ao serviço de pagamento externo.
- **MongoDB**: Banco de dados NoSQL.
- **Jest**: Framework de testes para JavaScript.
- **Supertest**: Biblioteca para testar APIs HTTP.
- **Nock**: Biblioteca para mockar requisições HTTP.

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```
2. Instale as dependências:
   ```sh
   npm install 
   ```
3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
   ```env
   MONGO_URI=mongodb://localhost:27017/dev-payment
   EXTERNAL_PAYMENT_API_URL=http://localhost:3100
   ```
## Uso

0. Inicie o servidor de mock:
   ```sh
   npm start:mocks
   ```
t
1. Inicie o servidor mock server:
   ```sh
   npm start 
   ```

2. Acesse a aplicação em http://localhost:3000.
- Iniciar Pagamento
- URL: /payments
- Método: POST
- Corpo da Requisição:
```json
{
  "amount": 100,
  "currency": "BRL",
  "method": "PAYPAL",
  "product_id": "87e9646a-8513-465d-b58d-6df44b9e4925"
}
```
- Resposta
```json
{
  "id": "generated-id",
  "status": "processed"
}
```

- Exemplo de comando curl:
```sh
curl -X POST http://localhost:3000/payments \
-H "Content-Type: application/json" \
-d '{
  "amount": 100,
  "currency": "BRL",
  "method": "PAYPAL",
  "product_id": "87e9646a-8513-465d-b58d-6df44b9e4925"
}'
```

Consultar Status do Pagamento
- URL: /payments/:id/status
- Método: GET
- Resposta:
```json
{
  "id": "payment-id",
  "status": "completed"
}
```
- Exemplo de comando curl:
```sh
curl -X GET http://localhost:3000/payments/b01b823b-9931-4438-b55f-782ed0b5b4c2/status
```

Testes
Para executar os testes, use o comando:

```sh
npm test
```

