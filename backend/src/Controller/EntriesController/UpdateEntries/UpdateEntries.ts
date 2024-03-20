import {PrismaClient} from '@prisma/client'
import {Request, Response} from 'express'

const prisma = new PrismaClient()

export default {
  async UpdateUserName(req: Request, res: Response) {
    try {
      const {id} = req.params
      const {km, value} = req.body

     const entrieExists = await prisma.entry.findUnique({where:{id}})

     if(!entrieExists) {
       return res.status(400).json({
         error: true,
         message: 'Entry does not exist'
       })
     }

     const Entry = await prisma.entry.update({
      where:{id},
      data:{
        km,
        value
      }
     })

      return res.status(200).json({
        message:"Entry is updated!",
        EntryUpdated:Entry
      })

    } catch (error) {
      return res.status(401).json({message:error.message})
    }
  }
}