import Express from 'express'

import CreateUser from './Controller/UserController/CreateUser/CreateUser';
import DeleteUser from './Controller/UserController/DeleteUser/DeleteUser';
import UpdateUserName from './Controller/UserController/UpdateUser/UpdateUserName';

const app = Express()
app.use(Express.json());

app.post('/createUser', CreateUser.CreateUser)
app.put('/:id', UpdateUserName.UpdateUserName)
app.delete('/:id', DeleteUser.DeleteUser)

app.listen(8000, () => {
  console.clear()
  console.log('🚀Server is Online in Port: 8000🚀')
} )