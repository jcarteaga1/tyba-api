const pgtools = require('pgtools');

// default postgres user
const config = {
  user: 'postgres',
  password: 'postgres',
  port: 5432,
  host: 'localhost'
}

// create db with default user
pgtools.createdb(config, 'tyba-db', function (err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
});