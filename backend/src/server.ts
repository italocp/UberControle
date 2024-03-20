import Express from 'express'

import CreateUser from './Controller/UsersController/CreateUser/CreateUser';
import DeleteUser from './Controller/UsersController/DeleteUser/DeleteUser';
import UpdateUserName from './Controller/UsersController/UpdateUser/UpdateUserName';
import CreateEntries from './Controller/EntriesController/CreateEntries/CreateEntries';
import UpdateEntries from './Controller/EntriesController/UpdateEntries/UpdateEntries';
import DeleteEntries from './Controller/EntriesController/DeleteEntries/DeleteEntries';

const app = Express()
app.use(Express.json());

app.post('/createUser', CreateUser.CreateUser)
app.put('/:id', UpdateUserName.UpdateUserName)
app.delete('/:id', DeleteUser.DeleteUser)

app.post('/entries/:id', CreateEntries.CreateEntries)
app.put('/entries/:id', UpdateEntries.UpdateUserName)
app.delete('/entries/:id', DeleteEntries.DeleteEntries)

app.listen(8000, () => {
  console.clear()
  console.log('🚀Server is Online in Port: 8000🚀')
} )