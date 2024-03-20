import {PrismaClient} from '@prisma/client'
import {Request, Response} from 'express'

const prisma = new PrismaClient()

export default {
  async UpdateExpenses(req: Request, res: Response) {
    try {
      const {id} = req.params
      const {name, value} = req.body

     const expenseExists = await prisma.expense.findUnique({where:{id}})

     if(!expenseExists) {
       return res.status(400).json({
         error: true,
         message: 'Expense does not exist'
       })
     }

     const Expense = await prisma.expense.update({
      where:{id},
      data:{
        name,
        value
      }
     })

      return res.status(200).json({
        message:"Expense is updated!",
        EntryUpdated:Expense
      })

    } catch (error) {
      return res.status(401).json({message:error.message})
    }
  }
}