import { PrismaClient} from '@prisma/client'
import {Request, Response} from 'express'

const prisma = new PrismaClient()

export default {
  async DeleteEntries(req: Request, res: Response) {
    try {
      const {id} = req.params
      const entryExists = await prisma.entry.findUnique({where:{id}})
      if(!entryExists) {
        return res.status(400).json({
          error: true,
          message: 'Entry does not exist'
        })
      }

      const Entry = await prisma.entry.delete({
        where: {
          id
        }
      })

      return res.status(200).json({
        message:"Entry is deleted!"
      })

    } catch (error) {
      return res.status(401).json({message:error.message})
    }
  }
}