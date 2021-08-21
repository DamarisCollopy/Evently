const users = require('../config/data/models')


class UsersControllers{
    static async read(req,res){
        try{
            const list = await users.Users.findAll()
            return res.status(200).json(list)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async findId(req, res){
        const {id} = req.params
        try{
            const find = await users.Users.findOne({
                where :{
                    id : Number(id)
                }
            })
            return res.status(200).json(find)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res){
        const newUsers = req.body

        try{
            const insert = await users.Users.create(newUsers)
            return res.status(200).json(insert)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    
    static async update(req, res){
        const {id} = req.params
        const updateUsers = req.body

        try{
            await users.Users.update(updateUsers, {
                where : {
                    id : Number(id)
                }
            })

            const mens =  await users.Users.findOne({
                where :{
                    id : Number(id)
                }
            })
            return res.status(200).json(mens)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res){
        const {id} = req.params

        try{
            await users.Users.destroy({
                where :{
                    id : Number(id)
                }
            })
            return res.status(200).json({
                message: 'User deleted'
            })

        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UsersControllers