import {PrismaClient} from '@prisma/client'
import {Request, Response} from 'express'

const prisma = new PrismaClient()

export default {
  async DeleteUser(req: Request, res: Response) {
    try {
      const {id} = req.params
      const User = await prisma.user.delete({
        where: {
          id
        }
      })

      return res.status(200).json({
        message:"User is deleted!",
      })
    } catch (error) {
      return res.status(401).json({message:error.message})
  }

}}