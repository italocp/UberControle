import {PrismaClient} from '@prisma/client'
import {Request, Response} from 'express'

const prisma = new PrismaClient()

export default {
  async UpdateTips(req: Request, res: Response) {
    try {
      const {id} = req.params
      const {name, value} = req.body

     const tipsExists = await prisma.tip.findUnique({where:{id}})

     if(!tipsExists) {
       return res.status(400).json({
         error: true,
         message: 'Tip does not exist'
       })
     }

     const Tip = await prisma.tip.update({
      where:{id},
      data:{
        name,
        value
      }
     })

      return res.status(200).json({
        message:"Tip is updated!",
        TipUpdated:Tip
      })

    } catch (error) {
      return res.status(401).json({message:error.message})
    }
  }
}