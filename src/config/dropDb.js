const pgtools = require('pgtools');

// default postgres user
const config = {
  user: 'postgres',
  password: 'postgres',
  port: 5432,
  host: 'localhost'
}

// dop db with default user
pgtools.dropdb(config, 'tyba-db', function (err, res) {
    if (err) {
      console.error(err);
      process.exit(-1);
    }
    console.log(res);
}); 
