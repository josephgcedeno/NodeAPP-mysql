const mysql = require( 'mysql' );
const keys = require('../config/keys');

const connection = mysql.createConnection(
{
	  host     : keys.mysqldb.host,
	  user     : keys.mysqldb.user,
	  password : keys.mysqldb.pass,
	  database : keys.mysqldb.database
});

connection.connect( (err)=>
{
	if (err) throw err;
	
	console.log('connected to db');

});


module.exports = connection;
