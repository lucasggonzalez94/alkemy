const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const PORT = process.env.PORT || 3050;

const app = express();

// Habilitar CORS
app.use(cors());

app.use(bodyParser.json());

// MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alkemy'
});

// Route Expenses
app.get('/expenses', (req, res) => {
    const query = 'SELECT id, concepto, monto, DATE_FORMAT(fecha, "%Y-%m-%d") AS fecha, tipo FROM expenses;';

    connection.query(query, (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not results');
        }
    });
});

app.get('/expenses/:id', (req, res) => {

    const {
        id
    } = req.params;

    const query = `SELECT id, concepto, monto, DATE_FORMAT(fecha, '%Y-%m-%d') AS fecha, tipo FROM expenses WHERE id = ${id}`;

    connection.query(query, (error, result) => {
        if (error) throw error;

        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/expenseslimit', (req, res) => {

    const query = `SELECT id, concepto, monto, DATE_FORMAT(fecha, '%Y-%m-%d') AS fecha, tipo FROM expenses ORDER BY fecha DESC LIMIT 10`;

    connection.query(query, (error, result) => {
        if (error) throw error;

        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('Not result');
        }
    });
});

app.post('/addexpenses', (req, res) => {
    const query = 'INSERT INTO expenses SET ?';

    const expenseObj = {
        concepto: req.body.concepto,
        monto: req.body.monto,
        fecha: req.body.fecha,
        tipo: req.body.tipo
    };

    connection.query(query, expenseObj, error => {
        if (error) throw error;

        res.send('Expense created');
    });
});

app.put('/updateexpenses/:id', (req, res) => {

    const {
        id
    } = req.params;
    const {
        concepto,
        monto,
        fecha,
        tipo
    } = req.body;
    const query = `UPDATE expenses SET concepto = '${concepto}', monto = ${monto}, fecha = '${fecha}', tipo = '${tipo}' WHERE id = ${id}`;

    connection.query(query, error => {
        if (error) throw error;

        res.send('Expense updated');
    });
});

app.delete('/deleteexpenses/:id', (req, res) => {
    const {
        id
    } = req.params;
    const query = `DELETE FROM expenses WHERE id = ${id}`;

    connection.query(query, error => {
        if (error) throw error;

        res.send('Expense deleted');
    });
});

// Route Users
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';

    connection.query(query, (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not results');
        }
    });
});

app.get('/users/:id', (req, res) => {
    const {
        id
    } = req.params;

    const query = `SELECT * FROM users WHERE id = ${id}`;

    connection.query(query, (error, result) => {
        if (error) throw error;

        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('Not result');
        }
    });
});

app.post('/addusers', (req, res) => {
    const query = 'INSERT INTO users SET ?';

    const userObj = {
        email: req.body.email,
        password: req.body.password,
        expenseId: req.body.expenseId,
        balance: req.body.balance
    };

    connection.query(query, userObj, error => {
        if (error) throw error;

        res.send('User created');
    });
});

app.put('/updateusers', (req, res) => {
    const {id} = req.params;
    const {email, password} = req.body;
    const query = `UPDATE users SET email = '${email}', password = '${password}' WHERE id = ${id}`;

    connection.query(query, error => {
        if (error) throw error;

        res.send('User updated');
    });
});

app.delete('/deleteusers', (req, res) => {
    const {id} = req.params;
    const query = `DELETE FROM users WHERE id = ${id}`;

    connection.query(query, error => {
        if (error) throw error;

        res.send('User deleted');
    });
});

connection.connect(error => {
    if (error) throw error;

    console.log('Database server running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));