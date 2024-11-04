async function connect() {

    if (global.connection)
        return global.connection.connect();

        const { Pool } = require('pg');
        const pool = new Pool({
            connectionString: process.env.CONNETION_STRING
        })
        const client = await pool.cennect();
        console.log("Criou o pool de conexão");

        const res = await client.query('select now()');
        console.log(res.rows[0]);
        client.release();

        global.connection = pool;
        return pool.connect();
    }

    connect();

    async function selectCustomers() {
        const client = await connect();
        const res = await client.query("SELECT * FROM clientes");
        return res.rows;
    }

    module.exports = {
        selectCustomers
    }
