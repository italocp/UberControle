import {PrismaClient} from '@prisma/client'
import {Request, Response} from 'express'

const prisma = new PrismaClient()

export default {
  async UpdateUserName(req: Request, res: Response) {
    try {
      const {id} = req.params
      /* Update na segurança das senhas no futuro */
      const {user, password} = req.body
      const verifyPassword = await prisma.user.findUnique({where:{id}})
      if(!verifyPassword.password === password) {
        return res.status(400).json({
          error: true,
          message: 'Password is incorrect'
        })
      }
      const User = await prisma.user.update({
        where: {
          id
        },
        data: {
          user
        }
      })

      return res.status(200).json({
        message:"User name is updated!",
        UserUpdated: User.user
      })
    } catch (error) {
      return res.status(401).json({message:error.message})
    }
  }
}