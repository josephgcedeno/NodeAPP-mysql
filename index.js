const express = require( 'express' );
const path = require( 'path' );
const msqyldb = require( './models/mysqldb-model' );
const app = express();

//will use everything on pulic folder


app.use(express.static(path.join(__dirname, '/public')));

app.get(`/`, ( err , res )=>
{

	msqyldb.query("INSERT INTO `user`(`user`, `pass`) VALUES ('admin','admin1')" , (err,result)=>
	{

			if (err) throw err;
			res.end('Successfully inserted');

	});

});

app.listen(3000, ()=>
{
	//console.log(`server running ${keys.mysql.user}`);
	console.log(`server running`);
});