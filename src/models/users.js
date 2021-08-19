const connectionTable = require('../data/database')

class Users {
    create(users) {
        const sql = 'INSERT INTO Users SET ?'

        connectionTable.query(sql, users, (erro, result) => {
            if(erro){
                console.log(erro)
            } else {
                console.log(result)
            }
        })
    }
}
module.exports = new Users