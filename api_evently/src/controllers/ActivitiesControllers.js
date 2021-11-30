const act = require('../config/data/models')

class ActivitiesControllers {

    static async create(req,res){
        res.set('Access-Control-Allow-Origin', '*')
        const newAct = req.body

        try{
            const insert = await act.Activities.create(newAct)
            return res.status(200).json(insert)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async read(req,res){
        res.set('Access-Control-Allow-Origin', '*')
        try{
            const list = await act.Activities.findAll()
            return res.status(200).json(list)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async findName(req, res){
        res.set('Access-Control-Allow-Origin', '*')
        const {name} = req.params
        try{
            const find = await act.Activities.findOne({
                where :{
                    activityName : name
                }
            })
            return res.status(200).json(find)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res){
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params

        try{
            await act.Activities.destroy({
                where :{
                    id : Number(id)
                }
            })
            return res.status(200).json({
                message: 'Activity deleted'
            })

        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ActivitiesControllers