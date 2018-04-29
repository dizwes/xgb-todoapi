
## Recursos utilizados no desenvolvimento:

- Node.Js;
- Express.Js ~ v.4.0;
- Conceito RestFul;
- MongoDb;
- Mongoose ~4.x;
- JSON data (para retornar os dados);
- PostMan (testar a API criada);

## Testando a Aplicação no Postman:

Caso queira testar as API's criadas no projeto, primeiro baixe o [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).
Depois de realizar o download do Postman, basta agora realizar os passos abaiaxo para
poder testar cada API criada!

  ROTA                    |     HTTP(Verbo)   |      Descrição        |
------------------------- | ----------------- | --------------------- |
/api/todos                |       GET         | Selecionar Todos      |
/api/todos                |       POST        | Atualizar Por Id      |
/api/todos/:todo_id       |       GET         | Selecionar Por Id     |
/api/todos/:todo_id       |       PUT         | Atualizar Por Id      |
/api/todos/:todo_id       |       DELETE      | Excluir Por Id        |
