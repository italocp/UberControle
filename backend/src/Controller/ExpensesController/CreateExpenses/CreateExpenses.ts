import {PrismaClient} from  '@prisma/client'
import {Request, Response} from 'express'

const prisma = new PrismaClient()


export default {
  async CreateExpenses (req: Request, res: Response) {
    try {
      const {id} = req.params
      const {name, value} = req.body

      const userExists = await prisma.user.findUnique({where:{id}})

      if(!userExists) {
        return res.status(400).json({
          error: true,
          message: 'User does not exist'
        })
      }

      const Expense = await prisma.expense.create({data:{
        name,
        value,
        user_id:id,
      }})

      return res.status(200).json({
        message: 'Expense created',
        ExpenseCreated: Expense
      })


    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}