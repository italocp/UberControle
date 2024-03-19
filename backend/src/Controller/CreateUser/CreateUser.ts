import {PrismaClient} from '@prisma/client'
import {Request, Response} from 'express'

const prisma = new PrismaClient()

export default {
  async CreateUser(req: Request, res: Response){
    try{
      const {user, email, password} = req.body
      const userExist = await prisma.user.findUnique({where:{email}})

      if(userExist) {
        return res.status(400).json(
          {
            error: true,
            message: 'Email already exists'
          }
        )
      }

      const User = await prisma.user.create({
        data: {
          user,
          email,
          password
        }
      })

      return res.status(200).json({
        massage:[
          {
            "Id": User.id,
            "User":User.user,
            "Email":User.email,
          }
        ]
      })

    } catch(error) {
      return res.json({message: error.message})
    }
  }
}
