import Express from 'express'

import CreateUser from './Controller/UsersController/CreateUser/CreateUser';
import DeleteUser from './Controller/UsersController/DeleteUser/DeleteUser';
import UpdateUserName from './Controller/UsersController/UpdateUser/UpdateUserName';
import CreateEntries from './Controller/EntriesController/CreateEntries/CreateEntries';

const app = Express()
app.use(Express.json());

app.post('/createUser', CreateUser.CreateUser)
app.put('/:id', UpdateUserName.UpdateUserName)
app.delete('/:id', DeleteUser.DeleteUser)

app.post('/entries/:id', CreateEntries.CreateEntries)

app.listen(8000, () => {
  console.clear()
  console.log('🚀Server is Online in Port: 8000🚀')
} )