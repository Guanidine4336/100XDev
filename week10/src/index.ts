import {Client} from "pg";

const client = new Client({
    connectionString: "postgres://postgres:mysecretpassword@localhost:5432/postgres"
})



// async function createUserTable() {
//     await client.connect();
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255)  NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result);
// }

// createUserTable();

async function insertData() {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });

    try {
        await client.connect();
        const insertQuery = "INSERT INTO users(username,email,password) VALUES ('username3','user4@ex.com','password2')"
        const res = await client.query(insertQuery);
        console.log("Insertion success", res);
    } catch (error) {
        console.log("error during insertion", error);
    } finally {
        await client.end();
    }
}


insertData();