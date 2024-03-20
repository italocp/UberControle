import {PrismaClient} from '@prisma/client'
import {Request, Response} from 'express'

const prisma = new PrismaClient()

export default {
  async  GetExpenses(req: Request, res: Response) {
    try {
      const {id} = req.params
      const userExists = await prisma.user.findUnique({where:{id}})
      if(!userExists) {
        return res.status(401).json({
          error: true,
          message: 'User does not exist'
        })
      }
      const expenses = await prisma.expense.findMany({where:{user_id:id}})
      return res.status(200).json(expenses)
    } catch (error) {
      return res.status(401).json({message:error.message})
    }
  }
}