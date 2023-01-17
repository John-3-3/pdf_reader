const Pool  = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pdf_reader',
    password: 'Euclide$10K20366',
    port: 5432
}); 

module.exports = pool;