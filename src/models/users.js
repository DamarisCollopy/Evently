const connectionTable = require('../data/database')

class Users {
    
    create(users, res) {
        const sql = 'INSERT INTO Users SET ?'

        const nameValid = users.name.length === 0
        const vall = [
            {
                name: 'name', 
                valid : nameValid,
                mensage: 'Nome invalido'
            
            }
        ] 
        
        const err = vall.filter(campo => campo.valid)
        const existErr = err.length
        
        if(existErr){
            res.status(400).json(err)
        } else {
            connectionTable.query(sql, users, (erro, result) => {
                if(erro){
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(result)
                }
            })
        }
       
    }

    lista(res) {
        const sql = 'SELECT * FROM Users'

        connectionTable.query(sql, (erro, resultado) => { 
            if(erro) {
                res.status(400).json(erro)
            } else { 
                res.status(201).json(resultado)
            }
        })
    }

}


module.exports = new Users