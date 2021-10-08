# Auth GraphQL

## Para usar

Se debe crear un archivo `.env` y en el se deben colocar las siguientes variables:

```dosini
PORT = 4000
MONGO_URI = mongodb+srv://<username>:<password>@<clustername>.zerqj.mongodb.net/<database>?retryWrites=true&w=majority
```

- `PORT`: Puerto en el que queremos que este el servidor
- `MONGO_URI`: URL para la conexion con MongoDB
