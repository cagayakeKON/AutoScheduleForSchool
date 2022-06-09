const sqlite3 = require('sqlite3').verbose();
const fs = require('fs')
const path = require('path')
let db = null

async function querySingle(sql, ...params) {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, row) => {
            if (err) {
                reject(err)
                return
            }
            resolve(row)
        })
    })
}

async function query(sql, ...params) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) {
                reject(err)
                return
            }
            resolve(rows)
        })
    })
}

async function run(sql, ...params) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, (err) => {
            if (err) {
                reject(err)
                return
            }
            resolve({
                lastID: this.lastID,
                changes: this.changes
            })
        })
    })
}

async function exec(sql) {
    return new Promise((resolve, reject) => {
        db.exec(sql, (err) => {
            if (err) {
                reject(err)
                return
            }
            resolve()
        })
    })
}

async function initializeDatabase(userDataPath) {
    const dbfilePath = path.join(userDataPath, 'info.db3')
    if (fs.existsSync(dbfilePath)) {
        db = new sqlite3.Database(dbfilePath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);
        await exec(`
delete from task_shard where task_id in (select id from task where state = 1);
delete from task where state = 1;
update task set state = 3 where state = 2;
    `)
        return
    }
    db = new sqlite3.Database(dbfilePath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);
    const createTxt = fs.readFileSync('scripts/create.sql').toString()
    await exec(createTxt)
}

exports = module.exports = {
    initializeDatabase,
    query,
    querySingle,
    run,
    exec
}
