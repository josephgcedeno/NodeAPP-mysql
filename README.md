# MYSQL AND NODE PRACTICE


## Steps:

- npm init -y
- npm install --save mysql express nodemon path 
- to instantiate mysql database just require mysql
  ` const mysql = require( 'mysql' );`

- then 
	`const connection= mysql.createConnection(
	{
		  host     : keys.mysqldb.host,
		  user     : keys.mysqldb.user,
		  password : keys.mysqldb.pass,
		  database : keys.mysqldb.database
	});
	`
- after this do some checking 
	`connection.connect( (err)=>
	{
		if (err) throw err;
		console.log('connected to db');
	});`

- to use query:
	`connection.query(<sql squery>, <callback>)`

- reference [Youtube link](https://www.youtube.com/watch?v=EN6Dx22cPRI)