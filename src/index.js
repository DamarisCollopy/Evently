const customExpress = require('./config/customExpress')
const connection = require('./data/database')
const tables = require('./data/table')


connection.connect((error =>{
    if(error){
        console.log(error)
    } else {
        tables.init(connection)
        console.log('conectado com sucesso')
        const app = customExpress()
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
}))

