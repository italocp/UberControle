import Express from 'express'
import CreateUser from './Controller/CreateUser/CreateUser';

const app = Express()
app.use(Express.json());

app.post('/createUser', CreateUser.CreateUser)

app.listen(8000, () => {
  console.clear()
  console.log('🚀Server is Online in Port: 8000🚀')
} )