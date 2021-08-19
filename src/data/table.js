class Table {
    init(connectionTable) {
       this.connectionTable = connectionTable
       this.createUsers()
    }

    createUsers() {
        const sql =
        'CREATE TABLE IF NOT EXISTS Users( name varchar(25) NOT NULL, surname varchar(25) NOT NULL, birthDate date,street varchar(50)  NOT NULL, neighborhood varchar(25) NOT NULL, city varchar(25) NOT NULL, zipCode varchar(8) NOT NULL,email varchar(50) NOT NULL,password varchar(6) NOT NULL,identifier varchar(11) NOT NULL, PRIMARY KEY(identifier))'

        this.connectionTable.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            } else {
                console.log('Table created successfully')
            }
        })
    }


}

module.exports = new Table