const users = require('../config/data/models');


class UsersControllers{
    static async read(req,res){
        res.set('Access-Control-Allow-Origin', '*')
        try{
            const list = await users.Users.findAll()
            return res.status(200).json(list)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async findId(req, res){
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params
        try{
            const find = await users.Users.findOne({
                where :{
                    uuid : id
                }
            })
            return res.status(200).json(find)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res){
        res.set('Access-Control-Allow-Origin', '*')
        const newUsers = req.body

        try{
            const insert = await users.Users.create(newUsers)
            return res.status(200).json(insert)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    
    static async update(req, res){
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params
        const updateUsers = req.body

        try{
            await users.Users.update(updateUsers, {
                where : {
                    uuid : id
                }
            })

            const mens =  await users.Users.findOne({
                where :{
                    uuid : id
                }
            })
            return res.status(200).json(mens)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res){
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params

        try{
            await users.Users.destroy({
                where :{
                    uuid : id
                }
            })
            return res.status(200).json({
                message: 'User deleted'
            })

        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async schedule(req, res){
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params
        try{
            const find = await users.UsersActivities.findAll({
                where :{
                    UserId : Number(id)               
                }
            })
            return res.status(200).json(find)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UsersControllers