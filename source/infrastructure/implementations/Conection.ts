const Pool = require('pg').Pool;
export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'shop',
    password: '12345',
    port: 5432,
  });
