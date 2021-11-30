const event = require('../config/data/models')

class EventsControllers {

    static async create(req,res){

        res.set('Access-Control-Allow-Origin', '*')
        const newEvent = req.body
        try{
            const insert = await event.Events.create(newEvent)
            return res.status(200).json(insert)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async read(req,res){
        res.set('Access-Control-Allow-Origin', '*')
        try{
            const list = await event.Events.findAll()
            return res.status(200).json(list)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async findId(req, res){
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params
        try{
            const find = await event.Events.findOne({
                where :{
                    id : Number(id)
                }
            })
            return res.status(200).json(find)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res){
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params
        const updateEvents = req.body

        try{
            await event.Events.update(updateEvents, {
                where : {
                    id : Number(id)
                }
            })

            const mens =  await event.Events.findOne({
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
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params

        try{
            await event.Events.destroy({
                where :{
                    id : Number(id)
                }
            })
            return res.status(200).json({
                message: 'Event deleted'
            })

        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}
module.exports = EventsControllers