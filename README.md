Twetteroo - Breve simulador do tweeter

- Armazenamento de dados
    - [x]  Para persistir os dados (usuários e tweets), utilize variáveis globais em memória
    - [x]  O formato de um **usuário** deve ser:
        
        ```jsx
        {
        	username: 'bobesponja', 
        	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
        }
        ```
        
    - [x]  O formato de um **tweet** deve ser:
        
        ```jsx
        {
        	username: "bobesponja",
          tweet: "eu amo o hub",
        }
        ```
        
- **POST** `/sign-up`
    - [x]  Deve receber (pelo body da request), um parâmetro **username** e um **avatar**, contendo o nome do username do usuário e a sua foto de avatar:
        
        ```jsx
        {
            username: "bobesponja",
        		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
        }
        ```
        
    - [x]  Salvar esse usuário num array de usuários do servidor
    - [x]  Por fim, retornar a mensagem `“OK”`
- **POST** `/tweets`
    - [x]  Deve receber (pelo body da request), os parâmetros `username` e `tweet`:
        
        ```jsx
        {
        	username: "bobesponja",
          tweet: "eu amo o hub"
        }
        ```
        
    - [x]  Salvar esse tweet num array de tweets do servidor
    - [x]  Por fim, retornar a mensagem `“OK”`
- **GET** `/tweets`
