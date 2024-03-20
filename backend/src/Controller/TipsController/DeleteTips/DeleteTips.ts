import { PrismaClient} from '@prisma/client'
import {Request, Response} from 'express'

const prisma = new PrismaClient()

export default {
  async DeleteTips(req: Request, res: Response) {
    try {
      const {id} = req.params
      const tipsExists = await prisma.tip.findUnique({where:{id}})
      if(!tipsExists) {
        return res.status(400).json({
          error: true,
          message: 'Tip does not exist'
        })
      }

      const Tip = await prisma.tip.delete({
        where: {
          id
        }
      })

      return res.status(200).json({
        message:"Tips is deleted!"
      })

    } catch (error) {
      return res.status(401).json({message:error.message})
    }
  }
}