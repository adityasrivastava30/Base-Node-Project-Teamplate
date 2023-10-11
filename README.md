This is a basic node template which anyone can use as it has been prepared , by keeping the most important code pricnicpal and project managment recommmedataion..



`src`-> Inside the src folder all actual souce code regarding the project will reside this will not include any kind of tests.


Lets  take a look inside the `src` folder

   - `config` -> In this folder anything and everything regarding any configufration or setup of libarary or module will ve done. For example:- setting up `dotenv` so theat we can use the envoirment variables a within in cleaner fashion , this is done in the `server-config.js` . One more example can be setup of the logging library that can help you to prepare meaningful log so configuration for this library should also be done.

   - `routes`-> In the routes folder we register the routes and corresponding middleware and controllers to it that somebody call routes.
 
   -`middlewares`-> They are just going to intercept the incoming request where we can write our validaters, authenticators etc.

   -`controllers`-> They are the kind of the last middlewares as post them you call ypu incoming request and data then pass it to the bussiness layer and once bussiness layers return an output , we structure  the api response in controllers and send the output.

   -`repositories` -> This folder contains all the logic using which we can interact the DB by writing queries , all the raw queries and orm queries .

   -`servies`->It contains the bussiness logic and interacts with repositories for data from database.

   - `utils`-> contain helper method error classes etc.

   ### setup The Project

   -Download this template from github and open it in your text 
   -Go inside the folder path ad execute the following command
   editor.
    ---
        port =<port number of your choice>
    ---
        ex:

        port=64600
    ---
    -go inside the `src ` folder and execute the following commmand:
    ---
        npx sequelize init
    ---
- By executing the above command you will get the migrations and seeders folder along with config.json folder.

- If you are setting up the development envoirment , then write the username of your db , password of the db and in dialect mention whatever db you are using for ex: mysql , mariadb etc.


- To run the server execute
---
npm run dev
---#   N o d e - B a s i c T e m p l a t e 
 
 
