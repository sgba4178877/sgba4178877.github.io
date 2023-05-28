var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
db = new sqlite.Database("./db.sqlite", sqlite.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});
router.post('/', (req, res) => {
    console.log(req.body);
    const {date, item, cpi} = req.body;
    if (date) {
        let year = date.split('/')[0];
        let month = date.split('/')[1];
        sql = `SELECT * FROM cigarette WHERE year = ? AND month = ?`;
        db.all(sql, [year, month], (err, rows) => {
            if (err) {
                console.error(err.message);
                return res.status(500).send(err.message);
            }
            res.send(rows);
        });
    } else if (item) {
        sql = `SELECT * FROM cigarette WHERE item = ?`;
        db.all(sql, [item], (err, rows) => {
            if (err) {
                console.error(err.message);
                return res.status(500).send(err.message);
            }
            res.send(rows);
        });
    } else if (cpi) {
        sql = `SELECT * FROM cigarette WHERE cpi = ?`;
        db.all(sql, [cpi], (err, rows) => {
            if (err) {
                console.error(err.message);
                return res.status(500).send(err.message);
            }
            res.send(rows);
        });
    }
});
router.get('/', function(req, res, next) {
    sql = "SELECT * FROM cigarette";
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
module.exports = router;

