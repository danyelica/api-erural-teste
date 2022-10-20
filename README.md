# Api para o Teste da erural

A api está hospedada [aqui](https://dany-api-erural.herokuapp.com/).

## Instalação
Siga esses passos no terminal para instalar e rodar o aplicativo:<br>
``$ npm install``<br>
``$ npm run dev``

## Banco de dados
- O banco de dados foi criado usando SQL e possui duas tabelas:
  - Salas:
    1. id,
    2. video,
    3. url
  - Participantes:
    1. usuario,
    2. host,
    3. sala_id

## Rotas
### Salas
`GET` `/salas`
- Lista todas as salas criadas. <br>
  ```javascript
  //Exemplo de retorno
  [
	{
		"id": 2,
		"video": "https://www.youtube.com/embed/CDzG2RaZORo",
		"url": 947
	},
	{
		"id": 1,
		"video": "https://www.youtube.com/embed/ItyXNzPUuJQ",
		"url": 538
	},
	{
		"id": 3,
		"video": "https://www.youtube.com/embed/CDzG2RaZORo",
		"url": "1234"
	}
  ]
  ```
`GET` `/salas/url`
- Recebe o número no link da sala pelo req.params. <br>
  ```javascript
  //Exemplo de retorno
  {
	"id": 3,
	"video": "https://www.youtube.com/embed/CDzG2RaZORo",
	"url": "1234",
	"users": [
		{
			"usuario": "marrua",
			"host": true,
			"sala_id": 3
		},
		{
			"usuario": "maria",
			"host": false,
			"sala_id": 3
		}
	]
  }
  ```
`POST` `/salas`
- Recebe url e vídeo pelo req.body e cria uma nova sala. <br>
  ```javascript
  //Exemplo de retorno
  [
	{
		"id": 3,
		"video": "https://www.youtube.com/embed/CDzG2RaZORo"
	}
  ]
  ```
`PUT` `/salas/:id`
- Recebe video e usuario pelo req.body, o id pelo req.params e atualiza o vídeo da sala caso o usuario for host. <br>
  ```javascript
  //Exemplo de retorno
  [
	{
		"id": 1,
		"video": "https://www.youtube.com/embed/ItyXNzPUuJQ"
	}
  ]
  ```

  ```javascript
  //Exemplo de retorno em caso de não autorizado
  {
	"mensagem": "Desculpa, você não tem permissão para isso"
  }
  ```
### Participantes
`POST` `/participantes`
- Recebe usuario, host e id da sala pelo req.body e cadastra um novo usuário numa sala. <br>
  ```javascript
  //Exemplo de retorno
  [
	{
		"usuario": "maria",
		"sala_id": 3
	}
  ]
  ```
