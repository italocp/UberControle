import {PrismaClient} from  '@prisma/client'
import {Request, Response} from 'express'

const prisma = new PrismaClient()


export default {
  async CreateEntries (req: Request, res: Response) {
    try {
      const {id} = req.params
      const {km, value} = req.body

      const userExists = await prisma.user.findUnique({where:{id}})

      if(!userExists) {
        return res.status(400).json({
          error: true,
          message: 'User does not exist'
        })
      }

      const Entry = await prisma.entry.create({data:{
        km,
        value,
        user_id:id,
      }})

      return res.status(200).json({
        message: 'Entry created',
        EntryCreated: Entry
      })


    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}