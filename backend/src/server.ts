import Express from 'express'

const app = Express()
app.use(Express.json());

app.listen(8000, () => {
  console.clear()
  console.log('🚀Server is Online in Port: 8000🚀')
} )