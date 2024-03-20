import Express from 'express'

import CreateUser from './Controller/UsersController/CreateUser/CreateUser';
import DeleteUser from './Controller/UsersController/DeleteUser/DeleteUser';
import UpdateUserName from './Controller/UsersController/UpdateUser/UpdateUserName';
import CreateEntries from './Controller/EntriesController/CreateEntries/CreateEntries';
import UpdateEntries from './Controller/EntriesController/UpdateEntries/UpdateEntries';
import DeleteEntries from './Controller/EntriesController/DeleteEntries/DeleteEntries';
import ReadEntries from './Controller/EntriesController/ReadEntries/ReadEntries';
import CreateExpenses from './Controller/ExpensesController/CreateExpenses/CreateExpenses';
import UpdateExpenses from './Controller/ExpensesController/UpdateExpenses/UpdateExpenses';
import DeleteExpenses from './Controller/ExpensesController/DeleteExpenses/DeleteExpenses';
import ReadExpenses from './Controller/ExpensesController/ReadExpenses/ReadExpenses';

const app = Express()
app.use(Express.json());

app.post('/createUser', CreateUser.CreateUser)
app.put('/:id', UpdateUserName.UpdateUserName)
app.delete('/:id', DeleteUser.DeleteUser)

app.post('/entries/:id', CreateEntries.CreateEntries)
app.put('/entries/:id', UpdateEntries.UpdateEntrie)
app.delete('/entries/:id', DeleteEntries.DeleteEntries)
app.get('/entries/:id', ReadEntries.GetEntries)

app.post('/expenses/:id', CreateExpenses.CreateExpenses)
app.put('/expenses/:id', UpdateExpenses.UpdateExpenses)
app.delete('/expenses/:id', DeleteExpenses.DeleteExpenses)
app.get('/expenses/:id', ReadExpenses.GetExpenses)

app.listen(8000, () => {
  console.clear()
  console.log('🚀Server is Online in Port: 8000🚀')
} )